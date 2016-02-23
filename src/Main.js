import React from 'react';
import App from './components/App';
import './main.scss'

document.addEventListener(`DOMContentLoaded`, () => {
	let reactNode = document.getElementById(`app`);

	if ( reactNode ) {
		React.render(
			<App />,
			reactNode
		);
	}
});