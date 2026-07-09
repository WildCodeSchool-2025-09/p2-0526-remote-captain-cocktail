import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { SortProvider } from "./contexts/SortContext";

import "./App.scss";

function App() {
	return (
		<SortProvider>
			<>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/Bar">Bar</Link>
					<Link to="/Cocktails">Cocktails</Link>
					<Link to="/Favorites">Favoris</Link>
				</nav>
				<main>
					<Outlet />
				</main>
			</>
		</SortProvider>
	);
}

export default App;
