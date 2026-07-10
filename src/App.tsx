import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { SortProvider } from "./contexts/SortContext";

import "./App.scss";
import CocktailDetailsDialog from "./components/CocktailDetailsDialog/CocktailDetailsDialog";
import { CocktailDetailsProvider } from "./contexts/CocktailDetailsContext";

function App() {
	return (
		<>
			<SortProvider>
				<CocktailDetailsProvider>
					<nav>
						<Link to="/">Accueil</Link>
						<Link to="/Bar">Bar</Link>
						<Link to="/Cocktails">Cocktails</Link>
						<Link to="/Favorites">Favoris</Link>
					</nav>
					<main>
						<Outlet />
					</main>
					<CocktailDetailsDialog />
				</CocktailDetailsProvider>
			</SortProvider>
		</>
	);
}

export default App;
