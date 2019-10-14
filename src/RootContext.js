import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RootContext = React.createContext({});

export const Provider = ({ children }) => {
	const [sidebarCollapsed, setSidebarCollapsed] = useState('sidebarCollapsed', false);

	// exports
	const rootContext = {
		sidebarCollapsed,
		setSidebarCollapsed,
	};

	return <RootContext.Provider value={rootContext}>{children}</RootContext.Provider>;
};

Provider.propTypes = {
	children: PropTypes.any,
};

export const { Consumer } = RootContext;
