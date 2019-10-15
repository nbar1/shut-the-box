import React, { useContext } from 'react';
import styled from 'styled-components';
import initializeFontAwesome from './helpers/fontAwesome';

import { RootContext } from './RootContext';

import Card from './components/Card';
import Dice from './components/Dice';
import Info from './components/Info';

initializeFontAwesome();

const CardsWrapper = styled.div`
	margin-top: 50px;
	text-align: center;
`;

function App() {
	const { cardsClosed } = useContext(RootContext);

	let cards = [];

	for (let i = 1; i < 10; i++) {
		cards.push(<Card key={i} number={i} closed={cardsClosed[i]} />);
	}

	return (
		<div className="App">
			<CardsWrapper>{cards}</CardsWrapper>
			<Dice />
			<Info />
		</div>
	);
}

export default App;
