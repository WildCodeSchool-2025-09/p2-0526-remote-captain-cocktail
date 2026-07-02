import type { Cocktails } from "../../types/types";

import styles from "./CocktailSuggestion.module.scss";

function CocktailSuggestion({ suggestion }: { suggestion: Cocktails }) {
	return (
		<article className={styles.suggestion}>
			<img src={suggestion.strDrinkThumb} alt="" />
			<div>
				<h3>{suggestion.strDrink}</h3>
			</div>
			<button type="button">heart</button>
		</article>
	);
}

export default CocktailSuggestion;
