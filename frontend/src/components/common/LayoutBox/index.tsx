import type { ReactNode } from 'react';

import { Header, Sider } from '@/components/common';
import { LayoutBoxStyledBox } from './style';

export default function LayoutBox({ children }: { children: ReactNode }) {
	return (
		<LayoutBoxStyledBox>
			<Header />

			<div className="content-wrap">
				<Sider />
				<div className="content">{children}</div>
			</div>
		</LayoutBoxStyledBox>
	);
}
