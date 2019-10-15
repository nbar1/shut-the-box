import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CardWrapper = styled.div`
	border: 1px solid #000;
	border-radius: 10px;
	cursor: pointer;
	display: inline-block;
	height: 160px;
	margin: 0 10px;
	width: 120px;
	transition: transform 100ms linear;

	:hover {
		transform: scale(1.05);
	}
`;

const Number = styled.div`
	line-height: 160px;
	font-size: 64px;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

	${props =>
		props.closed &&
		css`
			background-color: #a00;
		`}
`;

const Card = ({ number }) => {
	return (
		<CardWrapper>
			<Number>{number}</Number>
		</CardWrapper>
	);
};

Card.propTypes = {
	number: PropTypes.number.isRequired,
};

export default Card;
