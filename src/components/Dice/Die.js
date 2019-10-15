import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DieWrapper = styled.div`
	color: gray;
	display: inline-block;
	font-size: 64px;
	margin: 5px;
`;

const iconMap = {
	1: 'dice-one',
	2: 'dice-two',
	3: 'dice-three',
	4: 'dice-four',
	5: 'dice-five',
	6: 'dice-six',
};

const Die = ({ number }) => {
	return (
		<DieWrapper>
			<FontAwesomeIcon icon={['fas', iconMap[number]]} />
		</DieWrapper>
	);
};

Die.propTypes = {
	number: PropTypes.number.isRequired,
};

export default Die;
