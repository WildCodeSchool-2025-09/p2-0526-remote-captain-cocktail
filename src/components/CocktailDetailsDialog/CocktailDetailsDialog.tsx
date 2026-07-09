import { useId } from "../../contexts/CocktailDetailsContext";
import CocktailDetails from "../CocktailDetails/CocktailDetails";

function CocktailDetailsDialog() {
	const { id } = useId(); // à renommer useCocktailDetails, cf. l'autre commentaire
	return (
		<dialog id="my-dialog">{id && <CocktailDetails idDrink={id} />}</dialog>
	);
}

export default CocktailDetailsDialog;
