import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../../Components/Cardview/Cardview";
import CardView from "../../Components/Cardview/Cardview";
import "../Trending/trending.css";
import PageNavigation from "../../Components/PageNavigation/PageNavigation"; 

const Trending = () => {
	const [content, setContent] = useState([]);
	const [page, setPage] = useState(1);
	const fetchData = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
		);

		//console.log(data);
		setContent(data.results);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<div>
			<span className="page_title">trending 🔥</span>

            <div className = "trending">
                {
                    content && content.map((c) => <CardView
                    key ={c.id}
                    id = {c.id}
                    poster = {c.poster_path}
                    title = {c.title || c.name}
                    date = {c.first_air_date || c.first_release_date}
                    media_type = {c.media_type}
                    vote_average = {c.vote_average}
                    />)
                }
            </div>
			<PageNavigation setPage={setPage}
			/>
		</div>
	);
};

export default Trending;
