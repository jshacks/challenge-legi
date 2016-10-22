from django.http import Http404, JsonResponse, HttpResponseBadRequest, HttpResponseServerError, HttpResponse
from django.views.decorators.http import require_GET, require_POST


@require_GET
def search(request):
    q = request.GET.get('q')
    if not q:
        return HttpResponseBadRequest("q not set")

    document_ids = [1]

    data = {
        'status': 'ok',
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
        'id': doc_id,
    }
    return JsonResponse(data)


@require_POST
def submit(request):
    response = {
        'status': 'ok',
        'new': True,
    }
    return JsonResponse(response)
