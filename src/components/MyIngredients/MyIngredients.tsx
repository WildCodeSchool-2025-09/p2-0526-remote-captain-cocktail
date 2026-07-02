import type { IngredientListItem } from "../../types/types";

import styles from "./MyIngredients.module.scss";

import t from "../../data/fr_FR.json";
import Icon from "../Icon/Icon";

function MyIngredients({
	selectedIngredients,
	onRemove,
}: {
	selectedIngredients: IngredientListItem[];
	onRemove: (ingredient: IngredientListItem) => void;
}) {
	return (
		<div className={styles.ingredients}>
			<h2>
				<span>{t.bar.myIngredients.title}</span>
				{selectedIngredients.length > 0 && (
					<span>
						{selectedIngredients.length}
						{selectedIngredients.length > 1 ? "ingrédients" : "ingrédient"}
					</span>
				)}
			</h2>
			<ul>
				{selectedIngredients.map((selectedIngredient) => (
					<li key={selectedIngredient.strIngredient1}>
						<span>{selectedIngredient.strIngredient1}</span>
						<button type="button" onClick={() => onRemove(selectedIngredient)}>
							<Icon name="cross" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MyIngredients;
