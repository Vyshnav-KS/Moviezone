import "./Movies.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardView from "../../Components/Cardview/Cardview";
import PageNavigation from "../../Components/PageNavigation/PageNavigation";
import Genres from "../../Components/Genres";
import useGenres from "../../hooks/useGenre";
import { Container } from "@material-ui/core";
import { fontWeight } from "@material-ui/system";

const Movies = () => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	const [numOfPages, setNumOfPages] = useState();
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [genres, setGenres] = useState([]);
	const genreForUrl = useGenres(selectedGenres);

	const fetchMovies = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&include_adult=false&page=${page}&with_genres=${genreForUrl}`
		);

		setContent(data.results);
		setNumOfPages(data.total_pages);
	};

	useEffect(() => {
		fetchMovies();
	}, [page, genreForUrl]);

	return (
		<Container>
		<div>
			<span className="pageTitle" style={{ color: "white"
		,fontWeight: 900 }}>
				movies
			</span>

			<Genres
				type="movie"
				selectedGenres={selectedGenres}
				setSelectedGenres={setSelectedGenres}
				genres={genres}
				setGenres={setGenres}
				setPage={setPage}
			/>

			<div className="trending">
				{content &&
					content.map((c) => (
						<CardView
							key={c.id}
							id={c.id}
							poster={c.poster_path}
							title={c.title || c.name}
							date={c.first_air_date || c.first_release_date}
							media_type="movie"
							vote_average={c.vote_average}
						/>
					))}
			</div>
			<PageNavigation setPage={setPage} numOfPages={numOfPages} />
		</div>
		</Container>
	);
};

export default Movies;
