//https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=en-US

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Card, Carousel, Row, Col } from 'react-bootstrap';

const Genre = (props) => {
	const [ genre, setGenre ] = useState([]);
	const [ genreId, setGenreId ] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=it-IT`
			)
			.then((response) => {
				setGenre(response.data.genres);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(
		() => {
			axios
				.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
				)
				.then((response) => {
					setGenreId(response.data.results);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ genreId ]
	);

	const handleGenre = (e) => {
		setGenreId(e.target.value);
	};

	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Genere</Card.Title>
							<Card.Text>
								<select onChange={handleGenre}>
									<option value="">Sceglie il genere</option>
									{genre.map((genre) => (
										<option key={genre.id} value={genre.id}>
											{genre.name}
										</option>
									))}
								</select>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
export default Genre;
