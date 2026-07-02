import { useEffect, useState } from "react";

import type { Cocktails, IngredientListItem } from "../../types/types";

import styles from "./MySuggestions.module.scss";

import CocktailSuggestion from "../CocktailSuggestion/CocktailSuggestion";

import { BASE } from "../../config";
import t from "../../data/fr_FR.json";

function MySuggestions({
	selectedIngredients,
}: { selectedIngredients: IngredientListItem[] }) {
	const [suggestions, setSuggestions] = useState<Cocktails[]>([]);

	useEffect(() => {
		if (selectedIngredients.length === 0) {
			setSuggestions([]);
			return;
		}

		const ingredientNames = selectedIngredients
			.map((i) => i.strIngredient1)
			.join(",");

		fetch(`${BASE}/filter.php?i=${ingredientNames}`)
			.then((res) => res.json())
			.then((data) => {
				const unique = [
					...new Map(
						data.drinks.map((d: Cocktails) => [d.idDrink, d]),
					).values(),
				] as Cocktails[];

				return Promise.all(
					unique.map((cocktail) =>
						fetch(`${BASE}/lookup.php?i=${cocktail.idDrink}`)
							.then((res) => res.json())
							.then((data) => data.drinks[0] as Cocktails),
					),
				);
			})
			.then((fullCocktails) => setSuggestions(fullCocktails));
	}, [selectedIngredients]);

	return (
		<section className={styles.suggestions}>
			<h2>
				<span>{t.bar.mySuggestions.title}</span>
				<span>{suggestions.length}</span>
			</h2>
			<div className={styles["suggestions-container"]}>
				{suggestions.map((suggestion) => (
					<CocktailSuggestion
						key={suggestion.strDrink}
						suggestion={suggestion}
					/>
				))}
			</div>
		</section>
	);
}

export default MySuggestions;
