import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RootContext = React.createContext({});

export const Provider = ({ children }) => {
	const [cardsFlipped, setCardsFlipped] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
	});
	const [availableCredit, setAvailableCredit] = useState(0);
	const [gameWon, setGameWon] = useState(false);
	const [gameLost, setGameLost] = useState(false);

	/**
	 * flipCard
	 *
	 * @param {number} card
	 * @returns {void}
	 */
	const flipCard = card => {
		if (availableCredit < card) return;

		setCardsFlipped({ ...cardsFlipped, [card]: true });

		setAvailableCredit(availableCredit - card);

		if (isGameWon() === true) setGameWon(true);

		if (isGameLost() === true) setGameLost(true);
	};

	/**
	 * isGameWon
	 *
	 * @returns {bool}
	 */
	const isGameWon = () => {
		if (availableCredit !== 0) return false;

		Object.values(cardsFlipped).forEach(value => {
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
		setCardsFlipped({
			1: false,
			2: false,
			3: false,
			4: false,
			5: false,
			6: false,
		});

		setAvailableCredit(0);

		setGameWon(false);

		setGameLost(false);
	};

	// exports
	const rootContext = {
		cardsFlipped,
		flipCard,
		availableCredit,
		setAvailableCredit,
		gameWon,
		gameLost,
		resetGame,
	};

	return <RootContext.Provider value={rootContext}>{children}</RootContext.Provider>;
};

Provider.propTypes = {
	children: PropTypes.any,
};

export const { Consumer } = RootContext;
