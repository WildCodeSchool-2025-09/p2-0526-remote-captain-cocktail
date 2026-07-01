import IngredientsDropdown from "@/components/IngredientsDropdown/IngredientsDropdown";
import IngredientsSearch from "@/components/IngredientsSearch/IngredientsDropdown";
import MyIngredients from "@/components/MyIngredients/MyIngredients";
import MySuggestions from "@/components/MySuggestions/MySuggestions";

function Bar() {
	return (
		<div>
			<IngredientsSearch />
			<IngredientsDropdown />
			<MyIngredients />
			<MySuggestions />
		</div>
	);
}

export default Bar;
