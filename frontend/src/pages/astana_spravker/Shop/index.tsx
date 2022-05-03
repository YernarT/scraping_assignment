import { reqGetShop } from '@/service/api/astana_sparvker';

import { ScrapingResultBox } from '@/components/Box';

export default function ShopPage() {
	return <ScrapingResultBox service={reqGetShop} />;
}
