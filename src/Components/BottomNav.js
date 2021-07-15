import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
	root: {
		width: "100%",
		bottom: 0,
		position: "fixed",
		backgroundColor:"#09090b",
        
	},
    iconsBottom: {
        color: "white",
    },
});



export default function SimpleBottomNavigation() {

	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const history = useHistory();
    
	useEffect(()=>{
		if(value === 0)
			history.push("/");
		else if(value ===1)
			history.push("/movies");
		else if(value === 2)
			history.push("/series");
		else if(value === 3)
			history.push("/search");
		
	},[value, history])

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
                
			}}
            
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction
                className = {classes.iconsBottom}
				label="trending"
				icon={<WhatshotOutlinedIcon />}
			/>
			<BottomNavigationAction
                className = {classes.iconsBottom}
				label="movies"
				icon={<TheatersOutlinedIcon />}
			/>
			<BottomNavigationAction
                className = {classes.iconsBottom}
             label="series"
              icon={<TvOutlinedIcon />} 
             />
			<BottomNavigationAction
                className = {classes.iconsBottom}
             label="search"
              icon={<SearchOutlinedIcon />}
              />
		</BottomNavigation>
	);
}
