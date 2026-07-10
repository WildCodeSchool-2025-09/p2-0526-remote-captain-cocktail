import type { Cocktail } from "../../types/types";
// TODO (en attente du merge CocktailDetails) : import { useId } from "../../contexts/CocktailDetailsContext";

import styles from "./CocktailSuggestion.module.scss";

import t from "../../data/en_EN.json";
import { getMissingColor } from "../../utils/cocktail";
import Icon from "../Icon/Icon";

export default function CocktailSuggestion({
	suggestion,
	missingCount,
}: { suggestion: Cocktail; missingCount: number }) {
	// TODO (en attente du merge CocktailDetails) : const { setId } = useId();
	return (
		<button
			type="button"
			className={`${styles.suggestion} ${getMissingColor(missingCount)}`}
			command="show-modal"
			commandfor="my-dialog"
			onClick={() => {
				// TODO (en attente du merge CocktailDetails) : setId(suggestion.idDrink);
			}}
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
		</button>
	);
}
