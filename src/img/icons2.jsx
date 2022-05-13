import React, { useState, useEffect } from 'react';
import { FcFilmReel } from 'react-icons/fc';

class Question extends React.Component {
	render() {
		return (
			<div>
				<h3>
					{' '}
					Film Piu Visti <FcFilmReel />{' '}
				</h3>
			</div>
		);
	}
}

export default Question;
