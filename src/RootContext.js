import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';

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

	const socket = openSocket('http://localhost:4001');

	useEffect(() => {
		socket.on('updateGame', (game) => {
			connsole.log(game);
		});
	}, []);

	/**
	 * closeCard
	 *
	 * @param {number} card
	 * @returns {void}
	 */
	const closeCard = (card) => {
		if (availableCredit < card) return;

		if (cardsClosed[card] === true) return;

		let newCards = { ...cardsClosed, [card]: true };

		setCardsClosed(newCards);

		let newCredit = availableCredit - card;

		setAvailableCredit(newCredit);

		if (isGameWon(newCredit, newCards) === true) setGameWon(true);

		socket.emit('closeCard', card);
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
	 * @param {number} availableCredit
	 * @returns {bool}
	 */
	const isGameWon = (availableCredit, newCards) => {
		if (availableCredit !== 0) return false;

		let isWon = true;

		Object.values(newCards).forEach((value) => {
			if (isWon === true && value === false) isWon = false;
		});

		return isWon;
	};

	/**
	 * resetGame
	 *
	 * @returns {void}
	 */
	const resetGame = () => {
		socket.emit('resetGame');
	};

	// exports
	const rootContext = {
		cardsClosed,
		closeCard,
		availableCredit,
		setAvailableCredit,
		gameWon,
		resetGame,
		canRollOneDie,
	};

	return <RootContext.Provider value={rootContext}>{children}</RootContext.Provider>;
};

Provider.propTypes = {
	children: PropTypes.any,
};

export const { Consumer } = RootContext;
