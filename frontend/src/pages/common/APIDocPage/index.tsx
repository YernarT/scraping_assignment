import { Typography, Divider } from 'antd';
import { ApiBox } from '@/components/Box';
import { APIDocStyledBox } from './style';

const { Title, Paragraph, Text, Link } = Typography;

export default function APIDocPage() {
	return (
		<APIDocStyledBox>
			<Typography>
				<Title>Scraping API документация</Title>
				<Paragraph>
					Отдел разработки: AstanaHub (компания Yona), этот{' '}
					<Text code>scraping api</Text>
					предназначен только для обучения.
				</Paragraph>

				<Divider />

				<Title level={2}>Справочник организаций в Нур-Султане</Title>
				<Paragraph>
					<Text code>BASE_URL</Text>:{' '}
					<Link href="https://astana.spravker.ru">
						https://astana.spravker.ru
					</Link>
				</Paragraph>
				<Paragraph>
					Справочник Нур-Султана, услуги Нур-Султана, скидки в Нур-Султане,
					вакансии в Нур-Султане, отзывы об организациях.
				</Paragraph>

				{/* <ApiBox /> */}
			</Typography>
		</APIDocStyledBox>
	);
}
