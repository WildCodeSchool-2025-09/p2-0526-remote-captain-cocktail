import type { Cocktails } from "../../types/types";

import styles from "./CocktailSuggestion.module.scss";

import t from "../../data/fr_FR.json";
import Icon from "../Icon/Icon";

function getMissingColor(missingCount: number) {
	if (missingCount === 0) return "status-green";
	if (missingCount === 1) return "status-yellow";
	if (missingCount === 2) return "status-orange";
	return "status-red";
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
					{missingCount === 0 ? (
						<>
							<Icon name="checkmark" />
							{t.bar.cocktailSuggestion.doable}
						</>
					) : (
						<>
							{t.bar.cocktailSuggestion.missingIngredient.replace(
								"{missingCount}",
								String(missingCount),
							)}
							&nbsp;{missingCount > 1 ? "ingrédients" : "ingrédient"}
						</>
					)}
				</span>
			</div>
			<button type="button">heart</button>
		</article>
	);
}

export default CocktailSuggestion;
