import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import "./App.scss";
import { MyIngredientsProvider } from "./contexts/MyIngredientsContext";

function App() {
	return (
		<MyIngredientsProvider>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/Bar">Bar</Link>
				<Link to="/Cocktails">Cocktails</Link>
				<Link to="/Favorites">Favoris</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</MyIngredientsProvider>
	);
}

export default App;
