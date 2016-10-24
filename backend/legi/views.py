from django.http import Http404, JsonResponse, HttpResponseBadRequest, HttpResponseServerError, HttpResponse
from django.views.decorators.http import require_GET, require_POST
from django.views.decorators.csrf import csrf_exempt
import json
from . import models
from . import hash
from .process import process, ProcessingInputError
from .search import index_data, search_ids, SearchError


def get_document(sha1):
    """Returns the latest models.Document instance with the given sha1."""

    objects = models.Document.objects.filter(file__sha1=sha1).order_by('-date_modified')
    if not objects:
        raise Http404
    return objects[0]


@require_GET
def search(request):
    q = request.GET.get('q')
    if not q:
        return HttpResponseBadRequest("GET['q'] not set!")
    q = q.strip()

    try:
        document_ids = search_ids(q)
    except SearchError as e:
        return HttpResponseServerError(str(e))
    documents = [get_document(id).parsed for id in document_ids]

    data = {
        'status': 'ok',
        'query': q,
        'document_ids': document_ids,
        'documents': documents,
        'results': len(document_ids),
    }
    r = JsonResponse(data)
    r["Access-Control-Allow-Origin"] = '*'
    return r


@require_GET
def index(request):
    return HttpResponse("index")


@require_GET
def status(request):

    data = {
        'status': 'ok',
        'num_documents': 0,
        'num_requests': 0,
    }
    return JsonResponse(data)


@require_GET
def doc(request, doc_id):
    document = get_document(doc_id)
    data = {
        'status': 'ok',
        'doc_id': doc_id,
    }
    data.update(document.parsed)
    return JsonResponse(data)


@require_POST
@csrf_exempt
def submit(request):
    """Endpoint for submitting new crawls.
    Expects POST['data'] to be populated with data for a single document group."""

    # TODO authentication? Secret keys?
    # TODO stop processing the documents when submitted; use processing queues

    input_raw = request.POST.get('data')
    if not input_raw:
        return HttpResponseBadRequest('POST["data"] is not set!')
    try:
        input = json.loads(input_raw)
    except json.JSONDecodeError:
        return HttpResponseBadRequest('POST["data"] is not valid json')

    input_hash = hash.dict_sha1(input)

    submitted, created = models.SubmittedData.objects.update_or_create(
        sha1=input_hash,
        data=input
    )

    try:
        doc, new = process(submitted)
        index_data(doc)
    except ProcessingInputError as e:
        print(e)
        return HttpResponseServerError('error: ' + str(e))

    response = {
        'status': 'ok',
        'new': new,
    }

    return JsonResponse(response)
