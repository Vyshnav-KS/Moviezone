import "./Movies.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardView from "../../Components/Cardview/Cardview";
import PageNavigation from "../../Components/PageNavigation/PageNavigation";



const Movies = () => {  

    const[page, setPage] = useState(1);
    const[content, setContent] = useState([]);
    const[numOfPages, setNumOfPages] = useState();

    const fetchMovies = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&include_adult=false`
		);

        setContent(data.results);
        setNumOfPages(data.total_pages);

        };

        useEffect(()=>{
            fetchMovies();
        },[page]);

	return (
        <div>
    <span className="pageTitle" style={{color: "white"}}>movies</span>

    <div className = "trending">
                {
                    content && content.map((c) => <CardView
                    key ={c.id}
                    id = {c.id}
                    poster = {c.poster_path}
                    title = {c.title || c.name}
                    date = {c.first_air_date || c.first_release_date}
                    media_type = "movie"
                    vote_average = {c.vote_average}
                    />)
                }
            </div>
			<PageNavigation setPage={setPage} numOfPages={numOfPages}/>
        </div>
    
    );
};

export default Movies;
