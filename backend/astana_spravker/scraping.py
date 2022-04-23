from bs4 import BeautifulSoup

from . import BASE_URL


def scraping(html: str):
    '''接收 HTML 字符串, 返回特定数据集'''

    soup = BeautifulSoup(html, 'html.parser')

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

    return result_set
