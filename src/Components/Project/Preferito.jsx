import React, { useState, useEffect } from 'react';
import PopularDs from '../../models/popularDs';
import sliderSettings from '../../models/SliderSett';
import Slider from 'react-slick';
import { Image, Container } from 'react-bootstrap';
//https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1

const Populare = () => {
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
	return (
		<Container>
			<h2>Benvenuta su Stream </h2>
			<Slider {...sliderSettings}>
				{popularDs.map((popularDs) => (
					<div key={popularDs.id}>
						<Image src={`https://image.tmdb.org/t/p/w500/${popularDs.poster_path}`} alt={popularDs.name} />
					</div>
				))}
			</Slider>
		</Container>
	);
};

export default Populare;
