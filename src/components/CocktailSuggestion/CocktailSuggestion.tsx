import type { Cocktails } from "../../types/types";

import styles from "./CocktailSuggestion.module.scss";

import t from "../../data/fr_FR.json";

function getMissingColor(missingCount: number) {
	if (missingCount === 0) return styles["status-green"];
	if (missingCount === 1) return styles["status-yellow"];
	if (missingCount === 2) return styles["status-orange"];
	return styles["status-red"];
}

function CocktailSuggestion({
	suggestion,
	missingCount,
}: { suggestion: Cocktails; missingCount: number }) {
	return (
		<article
			className={`${styles.suggestion} ${getMissingColor(missingCount)}`}
		>
			<img src={suggestion.strDrinkThumb} alt="" />
			<div>
				<h3>{suggestion.strDrink}</h3>
				<span>
					{t.bar.cocktailSuggestion.missingIngredient.replace(
						"{missingCount}",
						String(missingCount),
					)}
					&nbsp;{missingCount > 1 ? "ingrédients" : "ingrédient"}
				</span>
			</div>
			<button type="button">heart</button>
		</article>
	);
}

export default CocktailSuggestion;
