import type { MenuProps } from 'antd';

import { useHistory } from 'react-router-dom';
import { useBoolean } from 'ahooks';

import { Menu, Button } from 'antd';
import {
	ApiOutlined,
	BugOutlined,
	MailOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import { SiderStyledBox, MiniSiderStylexBox } from './style';

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
	getItem('Обратная связь', '/feadback', <MailOutlined />),
];

export default function Sider() {
	const history = useHistory();

	const [siderCollapsed, { toggle: toggleSiderCollapsed }] = useBoolean(false);

	const handleSelect = ({ keyPath }: { keyPath: string[] }) => {
		let urlPath = keyPath.reverse().join('');
		history.push(urlPath);
	};

	const siderMenu = (
		<Menu
			className="sider-menu"
			mode={'inline'}
			defaultSelectedKeys={['/']}
			defaultOpenKeys={['/astana_spravker']}
			style={{ height: '100%', borderRight: 0 }}
			items={siderMenuItems}
			onSelect={handleSelect}
		/>
	);

	return (
		<>
			<SiderStyledBox width={265}>{siderMenu}</SiderStyledBox>
			<MiniSiderStylexBox siderCollapsed={siderCollapsed}>
				<Button
					type="primary"
					className="sider-menu-trigger"
					onClick={toggleSiderCollapsed}>
					<MenuOutlined />
				</Button>

				{siderMenu}
			</MiniSiderStylexBox>
		</>
	);
}
