import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
	return (
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
	);
}

export default App;