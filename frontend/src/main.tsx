import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { SafeArea } from './components/common';
import App from './App';

ReactDOM.render(
	<StrictMode>
		<SafeArea>
			<App />
		</SafeArea>
	</StrictMode>,
	document.getElementById('root'),
);
