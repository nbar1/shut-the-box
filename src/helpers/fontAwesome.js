import { library as FontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';

import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
	faDiceFour,
	faDiceFive,
	faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

export default function initializeFontAwesome() {
	FontAwesomeLibrary.add([faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]);
}
