import { Outlet } from "react-router";
import "./App.scss";
import CocktailDetailsDialog from "./components/CocktailDetailsDialog/CocktailDetailsDialog";
import Navbar from "./components/Navbar/Navbar";
import { CocktailDetailsProvider } from "./contexts/CocktailDetailsContext";
import { MyIngredientsProvider } from "./contexts/MyIngredientsContext";
import { SortProvider } from "./contexts/SortContext";

function App() {
	return (
		<>
			<MyIngredientsProvider>
				<CocktailDetailsProvider>
					<SortProvider>
						<Navbar />
						<main className="page-container">
							<Outlet />
						</main>
						<CocktailDetailsDialog />
					</SortProvider>
				</CocktailDetailsProvider>
			</MyIngredientsProvider>
		</>
	);
}

export default App;
