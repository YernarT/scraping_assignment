import { Layout } from 'antd';
import { Header, Sider } from '@/components/common';
import { IntroduceStyledBox } from './style';

const { Content } = Layout;

export default function APIDocPage() {
	return (
		<IntroduceStyledBox>
			<Header />
			<Layout style={{ height: 'inherit' }}>
				<Sider />

				<Layout style={{ padding: '0 24px 24px' }}>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}>
						Content
					</Content>
				</Layout>
			</Layout>
		</IntroduceStyledBox>
	);
}
