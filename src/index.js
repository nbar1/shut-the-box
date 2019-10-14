import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as RootProvider } from './RootContext';

import App from './App';

ReactDOM.render(
	<RootProvider>
		<App />
	</RootProvider>,
	document.getElementById('root')
);
