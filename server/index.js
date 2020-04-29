const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

server.listen(port, () => console.log(`Listening on port ${port}`));

// set up games
let games = [
	{
		id: 'nick',
		players: [
			{
				id: 'wfqn334',
				name: 'Nick',
				score: 123,
				wins: 2,
			},
		],
	},
	{
		id: 'test',
	},
];

/**
 * getGame
 *
 * @param {string} id
 * @returns {object}
 */
const getGame = (id) => {
	let game = games.filter((game) => game.id === id);
	return game[0];
};

/**
 * createGame
 *
 * @returns {string} id
 */
const createGame = () => {
	let gameId = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
	gameId = gameId.toUpperCase();

	games.push({
		id: gameId,
		currentPlayer: undefined,
		players: [],
		cards: [false, false, false, false, false, false, false, false, false],
	});
};

/**
 * destroyGame
 *
 * @param {string} id
 * @returns {null}
 */
const destroyGame = (id) => {
	let newGames = games.filter((game) => game.id !== id);
	games = newGames;
};

/**
 * createUser
 *
 * @param {string} gameId
 * @param {string} name
 * @returns {object} user
 */
const createUser = (gameId, name) => {
	try {
		let user = {
			id: 'sadfasd',
			name,
			score: 0,
			wins: 0,
		};

		const gameIndex = games.findIndex((game) => game.id === gameId);

		let thisGame = games[gameIndex];
		thisGame.players.push(user);

		games[gameIndex] = thisGame;

		return user;
	} catch (ex) {
		console.log('there was an error adding the user');
	}

	return;
};
