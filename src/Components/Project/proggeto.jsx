//https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&query=Superman&page=1&include_adult=false
/**
 * fare una pagina che prenda il nome di un film e restituisca il suo titolo, la sua descrizione, la sua data di uscita, il suo voto e la sua lingua
 * se ci sono piu titoli, restituisca una lista di titoli
 */

import React, { useState, useEffect } from 'react';
import CardS from './CardS';
import Navvb from '../Mbd/Navvb';

const Film = (props) => {
	const [ film, setFilm ] = useState([]);
	const [ search, setSearch ] = useState('Superman');
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&query=${search}&page=1&include_adult=false`
			)
				.then((response) => response.json())
				.then((data) => {
					setFilm(data.results);
					setError(false);
				})
				.catch((error) => {
					setError(true);
				});
		},
		[ search ]
	);

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} />
			</form>
			{error ? <p>Errore</p> : null}
			{film.map((film) => (
				<CardS
					key={film.id}
					title={film.title}
					overview={film.overview}
					vote_average={film.vote_average}
					original_language={film.original_language}
					poster_path={film.poster_path}
					trailer={film.trailer}
				/>
			))}
		</div>
	);
};

export default Film;
