import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const RootContext = React.createContext({});

export const Provider = ({ children }) => {
	const [cardsClosed, setCardsClosed] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
	});
	const [availableCredit, setAvailableCredit] = useState(0);
	const [gameWon, setGameWon] = useState(false);
	const [gameLost, setGameLost] = useState(false);

	/**
	 * closeCard
	 *
	 * @param {number} card
	 * @returns {void}
	 */
	const closeCard = card => {
		if (availableCredit < card) return;

		if (cardsClosed[card] === true) return;

		setCardsClosed({ ...cardsClosed, [card]: true });

		setAvailableCredit(availableCredit - card);

		if (isGameWon() === true) setGameWon(true);

		if (isGameLost() === true) setGameLost(true);
	};

	/**
	 * canRollOneDie
	 *
	 * @returns {bool}
	 */
	const canRollOneDie = () => {
		return cardsClosed[7] === true && cardsClosed[8] === true && cardsClosed[9] === true;
	};

	/**
	 * isGameWon
	 *
	 * @returns {bool}
	 */
	const isGameWon = () => {
		if (availableCredit !== 0) return false;

		Object.values(cardsClosed).forEach(value => {
			console.log(value);
			if (value === false) return false;
		});

		return true;
	};

	/**
	 * isGameLost
	 *
	 * @returns {bool}
	 */
	const isGameLost = () => {
		return false;
	};

	/**
	 * resetGame
	 *
	 * @returns {void}
	 */
	const resetGame = () => {
		setCardsClosed({
			1: false,
			2: false,
			3: false,
			4: false,
			5: false,
			6: false,
			7: false,
			8: false,
			9: false,
		});

		setAvailableCredit(0);

		setGameWon(false);

		setGameLost(false);
	};

	// exports
	const rootContext = {
		cardsClosed,
		closeCard,
		availableCredit,
		setAvailableCredit,
		gameWon,
		gameLost,
		resetGame,
		canRollOneDie,
	};

	return <RootContext.Provider value={rootContext}>{children}</RootContext.Provider>;
};

Provider.propTypes = {
	children: PropTypes.any,
};

export const { Consumer } = RootContext;
