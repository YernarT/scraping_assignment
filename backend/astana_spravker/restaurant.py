import requests

from . import BASE_URL
from .scraping import scraping


def get_data(page: int):
    url = f'{BASE_URL}/restoranyi/page-{page}/'
    response = requests.get(url)

    if response.status_code != 200:
        return False, {'message': 'nonexistent page'}

    result_set = scraping(response.text)

    return True, {'data': result_set, 'data_count': len(result_set), 'url': url}
