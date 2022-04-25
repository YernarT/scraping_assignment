import type { MenuProps } from 'antd';

import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import { ApiOutlined, BugOutlined, MailOutlined } from '@ant-design/icons';
import { SiderStyledBox } from './style';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key?: React.Key | null,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const siderMenuItems: MenuItem[] = [
	getItem('API документация', '/', <ApiOutlined />),
	getItem(
		'Справочник организаций в Нур-Султане',
		'/astana_spravker',
		<BugOutlined />,
		[
			getItem('Коворкинги', '/kovorking'),
			getItem('Магазины', '/shop'),
			getItem('Рестораны', '/restaurant'),
		],
	),
	getItem('Feedback', '/feadback', <MailOutlined />),
];

export default function Sider() {
	const history = useHistory();

	const handleSelect = ({ keyPath }: { keyPath: string[] }) => {
		let urlPath = keyPath.reverse().join('');
		history.push(urlPath);
	};

	return (
		<SiderStyledBox width={265}>
			<Menu
				mode="inline"
				defaultSelectedKeys={['/']}
				defaultOpenKeys={['/astana_spravker']}
				style={{ height: '100%', borderRight: 0 }}
				items={siderMenuItems}
				onSelect={handleSelect}
			/>
		</SiderStyledBox>
	);
}
