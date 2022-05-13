//https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Carousel, Col, Row } from 'react-bootstrap';

const PopularTv = (props) => {
	const [ tv, setTv ] = useState([]);
	const [ tvId, setTvId ] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&page=1`
			)
			.then((response) => {
				setTv(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(
		() => {
			axios
				.get(
					`https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&page=1`
				)
				.then((response) => {
					setTvId(response.data.results);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ tvId ]
	);

	const handleTv = (e) => {
		setTvId(e.target.value);
	};
	return (
		<Container>
			<Row>
				<Col>
					<Carousel>
						{tvId.map((tv) => (
							<Carousel.Item key={tv.id}>
								<img
									className="d-block w-100"
									src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
									alt={tv.name}
								/>
								<Carousel.Caption>
									<h3>{tv.name}</h3>
									<p>{tv.overview}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};
export default PopularTv;
