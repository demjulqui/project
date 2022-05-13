import React, { useState, useEffect } from 'react';

import slick from 'slick-carousel';
import Slider from 'react-slick';
import { Image, Card, Container } from 'react-bootstrap';

import { fetchPopularMovies } from '../../API';

const Top10 = () => {
	const [ popularDs, setPopularDs ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				'https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1'
			);
			const data = await result.json();
			setPopularDs(data.results);
			setLoading(false);
		};
		fetchData();
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		initialSlide: 0,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 5000
	};

	return (
		<Container>
			<h2>TopFilm </h2>
			<Slider {...settings}>
				{popularDs.map((popularDs) => (
					<div key={popularDs.id}>
						<Image
							width={200}
							height={250}
							alt="171x180"
							src={`https://image.tmdb.org/t/p/w500/${popularDs.poster_path}`}
						/>
					</div>
				))}
			</Slider>
		</Container>
	);
};

export default Top10;
