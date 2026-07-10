import { Outlet } from "react-router";
import { SortProvider } from "./contexts/SortContext";

import "./App.scss";
import CocktailDetailsDialog from "./components/CocktailDetailsDialog/CocktailDetailsDialog";
import Navbar from "./components/Navbar/Navbar";
import { CocktailDetailsProvider } from "./contexts/CocktailDetailsContext";
import { MyIngredientsProvider } from "./contexts/MyIngredientsContext";

function App() {
	return (
		<>
			<SortProvider>
				<MyIngredientsProvider>
					<CocktailDetailsProvider>
						<Navbar />
						<main className="page-container">
							<Outlet />
						</main>
						<CocktailDetailsDialog />
					</CocktailDetailsProvider>
				</MyIngredientsProvider>
			</SortProvider>
		</>
	);
}

export default App;
