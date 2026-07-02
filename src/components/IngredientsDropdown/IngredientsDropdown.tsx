import type { IngredientListItem } from "../../types/types";

import t from "../../data/fr_FR.json";

function IngredientsDropdown({
	ingredients,
}: { ingredients: IngredientListItem[] }) {
	return (
		<div>
			<h2>{t.bar.dropdown.results}</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient.strIngredient1}>
						<img
							src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png/small`}
							alt={ingredient.strIngredient1}
						/>
						<span>{ingredient.strIngredient1}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default IngredientsDropdown;
