import React, { useState, useEffect } from 'react';
import sliderSettings from './SliderSett';

import Slider from 'react-slick';
//faccio una slider vuota per riempire con i dati del props
export default function PopularDs(props) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear'
	};
	return (
		<div>
			<h2> Single Item</h2>
			<Slider {...settings}>
				<div>
					<h3>{props.title}</h3>
					<img src={props.img} alt={props.title} />
				</div>
				<div>
					<h3>{props.title}</h3>
					<img src={props.img} alt={props.title} />
				</div>
				<div>
					<h3>{props.title}</h3>
					<img src={props.img} alt={props.title} />
				</div>
			</Slider>
		</div>
	);
}
