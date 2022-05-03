import { reqGetRestaurant } from '@/service/api/astana_sparvker';

import { ScrapingResultBox } from '@/components/Box';

export default function RestaurantPage() {
	return <ScrapingResultBox service={reqGetRestaurant} />;
}
