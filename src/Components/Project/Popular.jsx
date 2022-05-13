//https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1

/**
 * fare una api con i film piu popolari
 */

import React, { useState, useEffect } from 'react';

export default function Popular() {
	const [ popular, setPopular ] = useState([]);

	useEffect(() => {
		fetch('https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1')
			.then((response) => response.json())
			.then((data) => {
				setPopular(data.results);
			});
	}, []);

	return (
		<div>
			<div className="container">
				<div className="row">
					{popular.map((item) => (
						<div className="col-md-3">
							<div className="card">
								<img
									src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">{item.first_air_date}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
