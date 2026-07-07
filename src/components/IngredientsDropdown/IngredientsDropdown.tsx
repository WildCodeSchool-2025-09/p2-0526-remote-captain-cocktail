import type { IngredientListItem } from "../../types/types";

import styles from "./IngredientsDropdown.module.scss";

import t from "../../data/fr_FR.json";
import Icon from "../Icon/Icon";

export default function IngredientsDropdown({
	ingredients,
	onSelect,
	search,
}: {
	ingredients: IngredientListItem[];
	onSelect: (ingredient: IngredientListItem) => void;
	search: string;
}) {
	return (
		<div className={styles.dropdown}>
			<h2>{t.bar.dropdown.results}</h2>
			{ingredients.length > 0 ? (
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
			) : (
				<div>
					<Icon name="search" />
					<h4>{t.bar.dropdown.noIngredientFound}</h4>
					<p>{t.bar.dropdown.noResult.replace("{search}", search)}</p>
				</div>
			)}
		</div>
	);
}
