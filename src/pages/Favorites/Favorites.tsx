import CocktailDetails from "../../components/CocktailDetails/CocktailDetails";

function Favorites() {
	return (
		<>
			<h1>Hello from Favorites</h1>
			<button type="button" command="show-modal" commandfor="my-dialog">
				View details
			</button>
			<dialog id="my-dialog">
				<CocktailDetails idDrink="11000" />
			</dialog>
		</>
	);
}

export default Favorites;
