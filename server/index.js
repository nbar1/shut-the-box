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

console.log(getGame('nick'));
