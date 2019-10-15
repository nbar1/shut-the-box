import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';

import { RootContext } from '../../RootContext';

import Die from './Die';

const DiceWrapper = styled.div`
	margin-top: 25px;
	text-align: center;
`;

const ButtonsWrapper = styled.div`
	margin: 15px auto;
`;

const Button = styled.div`
	background: gray;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	margin: 0 10px;
	padding: 10px;
	width: 100px;

	${props =>
		props.isDisabled &&
		css`
			opacity: 0.5;
			cursor: default;
		`}
`;

const Dice = () => {
	const [die1, setDie1] = useState(6);
	const [die2, setDie2] = useState(6);
	const { setAvailableCredit, availableCredit, canRollOneDie, resetGame } = useContext(RootContext);

	/**
	 * rollDice
	 *
	 * @returns {void}
	 */
	const rollDice = () => {
		if (availableCredit !== 0) return;

		let i = 0;

		let rollInterval = setInterval(() => {
			let die1Roll = Math.floor(Math.random() * 6) + 1;
			let die2Roll = Math.floor(Math.random() * 6) + 1;

			setDie1(die1Roll);
			setDie2(die2Roll);

			i++;

			if (i === 15) {
				clearInterval(rollInterval);
				setAvailableCredit(die1Roll + die2Roll);
			}
		}, 100);
	};

	return (
		<DiceWrapper>
			<Die number={die1} />
			<Die number={die2} />
			<ButtonsWrapper>
				<Button onClick={() => rollDice()} isDisabled={availableCredit !== 0}>
					Roll
				</Button>
				<Button onClick={() => rollDice()} isDisabled={canRollOneDie() === false || availableCredit !== 0}>
					Roll One
				</Button>

				<Button onClick={() => resetGame()}>Reset</Button>
			</ButtonsWrapper>
		</DiceWrapper>
	);
};

export default Dice;
