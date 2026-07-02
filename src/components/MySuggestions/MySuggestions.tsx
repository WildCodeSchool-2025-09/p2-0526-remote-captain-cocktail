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
		if (selectedIngredients.length < 2) {
			setSuggestions([]);
			return;
		}

		Promise.all(
				selectedIngredients.map((i) =>
					fetch(`${BASE}/filter.php?i=${i.strIngredient1}`)
						.then((res) => res.json())
						.then((data) => (Array.isArray(data.drinks) ? data.drinks : [])),
				),
			)
			.then((results) => {
				const all = results.flat() as Cocktails[];
				const countById = new Map<string, number>();
				for (const d of all) countById.set(d.idDrink, (countById.get(d.idDrink) ?? 0) + 1);

				const unique = [...new Map(all.map((d) => [d.idDrink, d])).values()]
					.filter((d) => (countById.get(d.idDrink) ?? 0) >= 2) as Cocktails[];

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
