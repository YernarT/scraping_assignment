import { apiServerInstance } from '@/service/ajax';

export type scrapingData = Array<{
	name: string;
	site: string;
	address: string;
	phone: string | null;
}>;

interface ScrapingResult {
	data: scrapingData[];
	data_count: number;
	url: string;
}

// kovorking
export const reqGetKovorking = (page: number): Promise<ScrapingResult> =>
	apiServerInstance.get(`/scraping/kovorking/${page}/`);

// shop
export const reqGetShop = (page: number): Promise<ScrapingResult> =>
	apiServerInstance.get(`/scraping/Shop/${page}/`);

// restaurant
export const reqGetRestaurant = (page: number): Promise<ScrapingResult> =>
	apiServerInstance.get(`/scraping/restaurant/${page}/`);
