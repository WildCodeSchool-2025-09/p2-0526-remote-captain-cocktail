import { Outlet } from "react-router";
import "./App.scss";
import CocktailDetailsDialog from "./components/CocktailDetailsDialog/CocktailDetailsDialog";
import Navbar from "./components/Navbar/Navbar";
import { CocktailDetailsProvider } from "./contexts/CocktailDetailsContext";

function App() {
	return (
		<>
			<CocktailDetailsProvider>
				<Navbar />
				<main className="page-container">
					<Outlet />
				</main>
				<CocktailDetailsDialog />
			</CocktailDetailsProvider>
		</>
	);
}

export default App;
