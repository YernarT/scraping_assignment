import requests
from bs4 import BeautifulSoup

BASE_URL = 'https://astana.spravker.ru'


def get_data(page: int):
    response = requests.get(f'{BASE_URL}/kovorking/page-{page}/')
    if response.status_code != 200:
        return False, {'message': 'nonexistent page'}

    soup = BeautifulSoup(response.text, 'html.parser')

    # 过滤出DOM树里的卡片组件
    cards = soup.select('.org-widget')

    # 结果集
    result_set = []

    for card in cards:
        data = {
            'name': card.select_one('.org-widget-header__title-link').text.strip(),
            'site': BASE_URL + card.select_one('.org-widget-header__title-link').get('href').strip(),
            'address': card.select_one('.org-widget-header__meta--location').text.strip()
        }

        # 其他信息列表
        spec_list = card.select('dl.spec')
        has_phone = False
        for spec in spec_list:
            if has_phone:
                break
            # 查找到电话号码
            if spec.select_one('span.spec__index-inner').text == 'Телефон':
                has_phone = True
                data['phone'] = spec.select_one('.spec__value').text.strip()

        if not has_phone:
            data['phone'] = None

        result_set.append(data)

    return True, result_set