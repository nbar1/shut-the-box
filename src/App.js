import React from 'react';
import styled from 'styled-components';
import initializeFontAwesome from './helpers/fontAwesome';

import Card from './components/Card';
import Dice from './components/Dice';

initializeFontAwesome();

const CardsWrapper = styled.div`
	margin-top: 50px;
	text-align: center;
`;

function App() {
	let cards = [];

	for (let i = 1; i < 10; i++) {
		cards.push(<Card number={i} />);
	}

	return (
		<div className="App">
			<CardsWrapper>{cards}</CardsWrapper>
			<Dice />
		</div>
	);
}

export default App;
