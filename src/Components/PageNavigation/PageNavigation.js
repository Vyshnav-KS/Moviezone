import Pagination from "@material-ui/lab/Pagination";
import { textAlign } from "@material-ui/system";
import "../../App.css";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const customTheme = createMuiTheme({
    palette:{
        type: "dark",
    }
});

const PageNavigation = ({setPage, numOfPages=10}) => {

    const handlePageChange = (page) =>{
        setPage(page);
        window.scroll(0,0);
    };

	return (
		<div className="center_pag_nav">
           
			<ThemeProvider theme={customTheme}>
            <Pagination 
            className="custom_pagination"
            onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} variant = "outlined" shape="rounded"/>
            </ThemeProvider>
		
        </div>
	);
};

export default PageNavigation;
