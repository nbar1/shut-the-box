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

/**
 * game
 *
 * @type {object}
 */
let game = {
	currentPlayer: undefined,
	players: [],
	cards: {
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
	},
};

/**
 * emitChanges
 *
 * @returns {void}
 */
const emitChanges = () => {
	io.emit('updateGame', game);
};

/**
 * createGame
 *
 * @returns {string} id
 */
const createGame = () => {
	game = {
		currentPlayer: undefined,
		players: [],
		cards: {
			1: false,
			2: false,
			3: false,
			4: false,
			5: false,
			6: false,
			7: false,
			8: false,
			9: false,
		},
	};

	emitChanges();
};

/**
 * destroyGame
 *
 * @returns {null}
 */
const destroyGame = () => {
	createGame();
};

/**
 * createUser
 *
 * @param {string} id
 * @param {string} name
 * @returns {object} user
 */
const createUser = (id, name) => {
	let user = {
		id,
		name,
		score: 0,
		wins: 0,
	};

	game.players.push(user);
};

io.sockets.on('connection', (client) => {
	/**
	 * addUser
	 */
	client.on('addUser', (userInfo) => {
		createUser(userInfo.id, userInfo.name);

		emitChanges();
	});

	/**
	 * closeCard
	 */
	client.on('closeCard', (card) => {
		game.cards[card] = true;

		emitChanges();
	});

	/**
	 * resetGame
	 */
	client.on('resetGame', (card) => {
		destroyGame();

		emitChanges();
	});
});
