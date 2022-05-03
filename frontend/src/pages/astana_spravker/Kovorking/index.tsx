import { reqGetKovorking } from '@/service/api/astana_sparvker';

import { ScrapingResultBox } from '@/components/Box';

export default function KovorkingPage() {
	return <ScrapingResultBox service={reqGetKovorking} />;
}
