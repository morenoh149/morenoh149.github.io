import logging
import time

log = logging.getLogger(__name__)


class TimingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = time.time()
        response = self.get_response(request)
        log.debug(f'View time: {start_time - time.time()}')
        return response


basic middleware for printing the time of a view
