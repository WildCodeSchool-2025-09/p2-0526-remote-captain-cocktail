import type { IngredientListItem } from "../../types/types";

import styles from "./MyIngredients.module.scss";

import t from "../../data/en_EN.json";
import Icon from "../Icon/Icon";

export default function MyIngredients({
	selectedIngredients,
	onRemove,
	onClear,
}: {
	selectedIngredients: IngredientListItem[];
	onRemove: (ingredient: IngredientListItem) => void;
	onClear: () => void;
}) {
	return (
		<section className={styles.ingredients}>
			<div className={styles.title}>
				{selectedIngredients.length > 0 && (
					<>
						<h2>
							<span>{t.bar.myIngredients.title}</span>
							<span>
								{selectedIngredients.length}&nbsp;
								{selectedIngredients.length > 1 ? "ingrédients" : "ingrédient"}
							</span>
						</h2>
						<button type="button" onClick={onClear}>
							<Icon name="trashcan" />
							<span>{t.bar.myIngredients.empty}</span>
						</button>
					</>
				)}
			</div>
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
		</section>
	);
}
