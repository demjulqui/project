//http://127.0.0.1:2000/api/tv/popular
//http://127.0.0.1:2000/api/movie/popular

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Carousel, Card, Image, Row, Container, Col } from 'react-bootstrap';

//stampo un carousel di film popolari ed a fianco unaltro carousel di film popolari

const CarouselProva = (props) => {
	const [ film, setFilm ] = useState([]);
	const [ film2, setFilm2 ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://127.0.0.1:2000/api/tv/popular `)
			.then((response) => {
				setFilm(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(`http://127.0.0.1:2000/api/movie/popular `)
			.then((response) => {
				setFilm2(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<Carousel>
						{film.map((film) => (
							<Carousel.Item key={film.id}>
								<img
									className="d-block w-100"
									src={`http://127.0.0.1:2000/api/tv/popular/` + film.id}
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

export default CarouselProva;
