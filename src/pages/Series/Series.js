import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardView from "../../Components/Cardview/Cardview";
import PageNavigation from "../../Components/PageNavigation/PageNavigation";
import "./Series.css";

const Series = () => {

    const[page, setPage] = useState(1);
    const[content, setContent] = useState([]);
    const[numOfPages, setNumOfPages] = useState();


    const fetchSeries = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&include_adult=false`
		);
        console.log(data);    
        setContent(data.results);
        setNumOfPages(data.total_pages);

        };

        useEffect(()=>{
            fetchSeries();
        },[page]);

    return ( 
        <div>
            <span className = "pageTitle">series</span>

            <div className = "trending">
                {
                    content && content.map((c) => <CardView
                    key ={c.id}
                    id = {c.id}
                    poster = {c.poster_path}
                    title = {c.title || c.name}
                    date = {c.first_air_date || c.first_release_date}
                    media_type = "tv"
                    vote_average = {c.vote_average}
                    />)
                }
            </div>
			<PageNavigation setPage={setPage}/>

        </div>
     );
}
 
export default Series;