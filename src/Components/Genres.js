import axios from "axios";
import { useEffect } from "react";
import { Chip } from "@material-ui/core";
import { palette } from "@material-ui/system";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

const genreTheme = createTheme({
	palette: {
		type: "dark",
	},
});

const Genres = ({
	type,
	selectedGenres,
	setSelectedGenres,
	genres,
	setGenres,
	setPage,
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

	const fetchgenres = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);

		setGenres(data.genres);
	};

	useEffect(() => {
		fetchgenres();

		return () => {
			setGenres({});
		};
	}, []);

	return (
		<Container>
			<ThemeProvider theme={genreTheme}>
				<div style={{ padding: "6px 0px" }}>
					
                {selectedGenres &&
                selectedGenres.map((genre) => (
						<Chip
							variant="outlined"
							label={genre.name}
							style={{ margin: 2 }}
                            color = "primary"
							key={genre.id}
							clickable
                            size="small"
                            onDelete={() => handleRemove(genre)}
						/>
					))}
                    
                    {genres &&
                    genres.map((genre) => (
						<Chip
							variant="outlined"
							label={genre.name}
							style={{ margin: 2 }}
							key={genre.id}
							clickable
                            size="small"
                            onClick={() => handleAdd(genre)}
						/>
					))}
				</div>
			</ThemeProvider>
		</Container>
	);
};

export default Genres;
