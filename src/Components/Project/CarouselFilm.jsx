//https://api.themoviedb.org/3/movie/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';

const PopularFilm = (props) => {
	const [ film, setFilm ] = useState([]);
	const [ filmId, setFilmId ] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&page=1`
			)
			.then((response) => {
				setFilm(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(
		() => {
			axios
				.get(
					`https://api.themoviedb.org/3/movie/popular?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&page=1`
				)
				.then((response) => {
					setFilmId(response.data.results);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ filmId ]
	);

	const handleFilm = (e) => {
		setFilmId(e.target.value);
	};
	return (
		<Container>
			<Row>
				<Col>
					<Carousel>
						{filmId.map((film) => (
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
				</Col>
			</Row>
		</Container>
	);
};
export default PopularFilm;
