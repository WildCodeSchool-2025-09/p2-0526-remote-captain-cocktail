import { Outlet } from "react-router";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<main className="page-container">
				<Outlet />
			</main>
		</>
	);
}

export default App;
