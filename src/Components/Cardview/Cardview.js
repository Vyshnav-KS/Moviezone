import { img_300, unavailable } from "../../config/config";
import "../Cardview/Cardview.css";

const CardView = ({ id, poster, title, date, media_type, vote_average }) => {
	return (
		<div className="main_card">
            <span className="media_type">
				{media_type === "tv" ? "series" : "movie"}
			</span>
			<div className="cent_img">
            <img
				className="poster_image"
				src={poster ? `${img_300}/${poster}` : unavailable}
				alt={title}
			/>
            </div>
			<span className="title">{title}</span>
			

			<div className="date_rate">
            
            <div className="rating_box">
			
            <span className="rating">{vote_average}</span>
			<div className="star"><span >⭐</span></div>
            </div>

            <span className="date">{date}</span>
            </div>
		</div>
	);
};

export default CardView;
