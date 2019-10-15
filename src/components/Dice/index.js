import React, { useState } from 'react';
import styled from 'styled-components';

import Die from './Die';

const DiceWrapper = styled.div`
	margin-top: 25px;
	text-align: center;
`;

const RollButton = styled.div`
	background: gray;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	margin: 0 auto;
	padding: 10px;
	width: 100px;
`;

const Dice = () => {
	const [die1, setDie1] = useState(6);
	const [die2, setDie2] = useState(6);
	const [diceSet, setDiceSet] = useState(false);

	/**
	 * rollDice
	 *
	 * @returns {void}
	 */
	const rollDice = () => {
		setDiceSet(false);

		let i = 0;

		let rollInterval = setInterval(() => {
			setDie1(Math.floor(Math.random() * 6) + 1);
			setDie2(Math.floor(Math.random() * 6) + 1);
			i++;

			if (i === 15) clearInterval(rollInterval);
		}, 100);

		setDiceSet(true);
	};

	return (
		<DiceWrapper>
			<Die number={die1} />
			<Die number={die2} />
			<RollButton onClick={() => rollDice()}>Roll</RollButton>
		</DiceWrapper>
	);
};

export default Dice;
