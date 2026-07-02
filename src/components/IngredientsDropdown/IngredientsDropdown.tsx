import type { IngredientListItem } from "../../types/types";

import styles from "./IngredientsDropdown.module.scss";

import t from "../../data/fr_FR.json";
import Icon from "../Icon/Icon";

function IngredientsDropdown({
	ingredients,
	onSelect,
}: {
	ingredients: IngredientListItem[];
	onSelect: (ingredient: IngredientListItem) => void;
}) {
	return (
		<div className={styles.dropdown}>
			<h2>{t.bar.dropdown.results}</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient.strIngredient1}>
						<img
							src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png/small`}
							alt={ingredient.strIngredient1}
						/>
						<span>{ingredient.strIngredient1}</span>
						<button type="button" onClick={() => onSelect(ingredient)}>
							<Icon name="add" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default IngredientsDropdown;
