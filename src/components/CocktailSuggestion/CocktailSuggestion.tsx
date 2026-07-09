import type { Cocktail } from "../../types/types";

import styles from "./CocktailSuggestion.module.scss";

import { Link } from "react-router-dom";
import t from "../../data/en_EN.json";
import Icon from "../Icon/Icon";

function getMissingColor(missingCount: number) {
	if (missingCount === 0) return "status-green";
	if (missingCount === 1) return "status-yellow";
	if (missingCount === 2) return "status-orange";
	return "status-red";
}

export default function CocktailSuggestion({
	suggestion,
	missingCount,
}: { suggestion: Cocktail; missingCount: number }) {
	return (
		<Link
			to={`/cocktail/${suggestion.idDrink}`}
			className={`${styles.suggestion} ${getMissingColor(missingCount)}`}
		>
			<img src={suggestion.strDrinkThumb} alt={suggestion.strDrink} />
			<div>
				<h5>{suggestion.strDrink}</h5>
				<span>
					{missingCount === 0 ? (
						<>
							<Icon name="checkmark" className={styles.checkmark} />
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
			<button type="button" aria-label={t.bar.cocktailSuggestion.favorite}>
				<Icon name="heart" />
			</button>
		</Link>
	);
}
