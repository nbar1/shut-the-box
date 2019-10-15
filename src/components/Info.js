import React, { useContext } from 'react';

import { RootContext } from '../RootContext';

const Info = () => {
	const { availableCredit, gameWon, gameLost } = useContext(RootContext);

	return (
		<>
			<div>Available: {availableCredit}</div>
			<div>win: {gameWon.toString()}</div>
			<div>lost: {gameLost.toString()}</div>
		</>
	);
};

Info.propTypes = {};

export default Info;
