import { useState } from "react";
import CocktailDetails from "../../components/CocktailDetails/CocktailDetails";

function Favorites() {
	const [modale, setModale] = useState(false);
	return (
		<>
			<h1>Hello from Favorites</h1>
			<button type="button" onClick={() => setModale(!modale)}>
				clic
			</button>
			{modale && <CocktailDetails />}
		</>
	);
}

export default Favorites;
