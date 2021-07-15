import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Container } from "@material-ui/core";
import SimpleBottomNavigation from "./Components/BottomNav";
import "./App.css";
import Movies from "./pages/Movies/Movies";
import Trending from "./pages/Trending/Trending";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="app">
					<Container>
						<Switch>
							<Route path="/" component={Trending} exact />
							<Route path="/movies" component={Movies} />
							<Route path="/series" component={Series} />
							<Route path="/search" component={Search} />
						</Switch>
					</Container>
				</div>
				<SimpleBottomNavigation />
			</BrowserRouter>
		</>
	);
}

export default App;
