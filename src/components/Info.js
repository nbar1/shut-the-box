import React, { useContext } from 'react';

import { RootContext } from '../RootContext';

const Info = () => {
	const { availableCredit, gameWon } = useContext(RootContext);

	return (
		<>
			<div>Available: {availableCredit}</div>
			<div>win: {gameWon.toString()}</div>
		</>
	);
};

Info.propTypes = {};

export default Info;
