from django.http import Http404, JsonResponse, HttpResponseBadRequest, HttpResponseServerError, HttpResponse
from django.views.decorators.http import require_GET, require_POST
from django.views.decorators.csrf import csrf_exempt
import json
from . import models
from . import hash

@require_GET
def search(request):
    q = request.GET.get('q')
    if not q:
        return HttpResponseBadRequest("q not set")
    q = q.trim()

    document_ids = [1]

    data = {
        'status': 'ok',
        'query': q,
        'document_ids': document_ids,
        'results': len(document_ids),
    }

    return JsonResponse(data)


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
    data = {
        'status': 'ok',
        'doc_id': doc_id,
    }
    return JsonResponse(data)


@require_POST
@csrf_exempt
def submit(request):

    input_raw = request.POST.get('data')
    if not input_raw:
        return HttpResponseBadRequest('POST["data"] is not set!')
    try:
        input = json.loads(input_raw)
    except json.JSONDecodeError:
        return HttpResponseBadRequest('POST["data"] is not valid json')

    input_hash = hash.dict_sha1(input)

    models.SubmittedData.objects.update_or_create(sha1=input_hash, data=input)

    response = {
        'status': 'ok',
        'new': True,
    }

    return JsonResponse(response)
