import type { scrapingData } from '@/service/api/astana_sparvker';

import { useEffect } from 'react';
import { useRequest, useSetState } from 'ahooks';
import { reqGetKovorking } from '@/service/api/astana_sparvker';

import {
	Statistic,
	Space,
	Button,
	InputNumber,
	Divider,
	Typography,
	Select,
	message as antdMessage,
	Skeleton,
	Empty,
} from 'antd';
import { KovorkingStyledBox } from './style';

const { Paragraph } = Typography;
const { Option } = Select;

export default function KovorkingPage() {
	const [state, setState] = useSetState<{
		filterMode: 'all' | 'hasPhone';
		page: number;

		dataCount: number;
		dataSet: scrapingData[];
		filteredData: scrapingData[];
	}>({
		filterMode: 'all',
		page: 1,

		dataCount: 0,
		dataSet: [],
		filteredData: [],
	});

	// 获取 kovorking 数据
	const { loading } = useRequest(() => reqGetKovorking(state.page), {
		refreshDeps: [state.page],

		onSuccess({ data, data_count }) {
			setState({ dataSet: data, filteredData: data, dataCount: data_count });
		},

		onError({ message }) {
			antdMessage.error(message);
		},
	});

	// 当过滤模式改变 或 数据改变时 触发过滤
	useEffect(() => {
		let newFilteredData;

		if (state.filterMode === 'hasPhone') {
			newFilteredData = state.dataSet.filter(data => data.phone !== null);
		} else {
			newFilteredData = state.dataSet;
		}

		setState({
			filteredData: newFilteredData,
			dataCount: newFilteredData.length,
		});
	}, [state.dataSet, state.filterMode]);

	return (
		<KovorkingStyledBox>
			<div className="toolbar">
				<Space align="center" className="filter">
					<Paragraph>Парам. фильтра</Paragraph>
					<Select
						placeholder="Парам. фильтра"
						value={state.filterMode}
						style={{ width: 100 }}
						onChange={value =>
							setState(prevState => ({
								...prevState,
								filterMode: value,
							}))
						}>
						<Option value="all">Все</Option>
						<Option value="hasPhone">С номерам</Option>
					</Select>
				</Space>

				<Space align="center" className="pagination">
					<Button
						type="text"
						disabled={state.page === 1}
						onClick={() =>
							setState(prevState => ({
								...prevState,
								page: prevState.page - 1,
							}))
						}>
						Пред. стр.
					</Button>
					<InputNumber
						value={state.page}
						onChange={value =>
							setState(prevState => ({ ...prevState, page: value }))
						}
						min={1}
						addonAfter={<span>стр.</span>}
					/>
					<Button
						type="text"
						onClick={() =>
							setState(prevState => ({
								...prevState,
								page: prevState.page + 1,
							}))
						}>
						след. стр.
					</Button>
				</Space>
			</div>

			<Divider />

			<Space direction="vertical" style={{ width: '100%' }} size={10}>
				<Typography>
					<Statistic
						title="Объем данных текущей страницы"
						value={state.dataCount}
					/>
				</Typography>

				<Skeleton
					active
					loading={loading}
					title={false}
					paragraph={{ rows: 4 }}>
					<Typography>
						{state.filteredData.map((data, idx) => (
							<pre key={idx}>{JSON.stringify(data, null, 2)}</pre>
						))}
						{state.dataCount === 0 && <Empty />}
					</Typography>
				</Skeleton>
			</Space>
		</KovorkingStyledBox>
	);
}
