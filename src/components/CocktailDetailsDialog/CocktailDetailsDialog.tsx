import { useCocktailId } from "../../contexts/CocktailDetailsContext";
import CocktailDetails from "../CocktailDetails/CocktailDetails";

function CocktailDetailsDialog() {
	const { cocktailId } = useCocktailId(); // à renommer useCocktailDetails, cf. l'autre commentaire
	return (
		<dialog id="my-dialog">
			{cocktailId && <CocktailDetails idDrink={cocktailId} />}
		</dialog>
	);
}

export default CocktailDetailsDialog;
