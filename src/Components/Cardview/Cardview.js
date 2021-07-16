import { img_300, unavailable } from "../../config/config";
import "../Cardview/Cardview.css";
import ContentModal from "../ContentModal/ContentModal";

const CardView = ({ id, poster, title, date, media_type, vote_average }) => {
	return (
		<div className= "main_card">
		<ContentModal media_type={media_type} id={id}>
            <span className="media_type" style={{margin: "0px 100px"}}>
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
		</ContentModal>
		</div>
	);
};

export default CardView;
