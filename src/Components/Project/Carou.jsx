import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Container, Carousel } from 'react-bootstrap';

//https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1

//faccio un carousel di film popolari
//

const Carou = (props) => {
	const [ film, setFilm ] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1`
			)
			.then((response) => {
				setFilm(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Container style={{ width: '18rem' }} border="primary">
			<Carousel>
				{film.map((film) => (
					<Carousel.Item key={film.id}>
						<img
							className="d-block w-100"
							src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
							alt={film.title}
						/>
						<Carousel.Caption>
							<h3>{film.title}</h3>
							<p>{film.overview}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	);
};

export default Carou;
