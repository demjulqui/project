import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Nav,
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Navbar,
	Dropdown,
	Form,
	FormControl,
	Figure,
	Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&query=${search}&page=1&include_adult=false
//faccio una navbar con una searchbar e una lista di film e una scrollbar con tutti i generi
//https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=it-IT

const Cerca = () => {
	const [ search, setSearch ] = useState('');
	const [ movies, setMovies ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ genres, setGenres ] = useState([]);
	const [ genre, setGenre ] = useState('');
	const [ genreId, setGenreId ] = useState('');
	const [ genreName, setGenreName ] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				'https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=it-IT'
			);
			setGenres(result.data.genres);
			setLoading(false);
		};
		fetchData();
	}, []);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const fetchData = async () => {
			const result = await axios.get(
				`https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&query=${search}&page=1&include_adult=false`
			);
			setMovies(result.data.results);
			setLoading(false);
		};
		fetchData();
	};
	const handleGenre = (e) => {
		setGenre(e.target.value);
		setGenreId(e.target.id);
		setGenreName(e.target.name);
	};
	const handleGenreSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const fetchData = async () => {
			const result = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=a39e12e45742a56081665355c89ed801&language=it-IT&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
			);
			setMovies(result.data.results);
			setLoading(false);
		};
		fetchData();
	};
	return (
		<Container>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Stream</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				<Row>
					<Col>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
					</Col>
					<Col>
						<Button variant="outline-info" onClick={handleSubmit}>
							Search
						</Button>
					</Col>
				</Row>
			</Navbar>
			<Row>
				<Col>
					<ListGroup>
						{loading ? (
							<h1>{''}</h1>
						) : (
							movies.map((movie) => (
								<ListGroupItem key={movie.id}>
									<Link to={`/movie/${movie.id}`}>
										<Figure>
											<Figure.Image
												width={171}
												height={100}
												alt="171x100"
												src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											/>
											<Figure.Caption>{movie.title}</Figure.Caption>
										</Figure>
									</Link>
								</ListGroupItem>
							))
						)}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default Cerca;
