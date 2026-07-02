import { useEffect, useState } from "react";

import type { IngredientListItem } from "../../types/types";

import CocktailSuggestion from "../CocktailSuggestion/CocktailSuggestion";

import t from "../../data/fr_FR.json";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;

function MySuggestions({
	selectedIngredients,
}: { selectedIngredients: IngredientListItem[] }) {
	const [suggestions, setSuggestions] = useState<IngredientListItem[]>([]);

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
			.then((data) => setSuggestions(data.drinks));
	}, [selectedIngredients]);

	return (
		<div>
			<h2>
				<span>{t.bar.mySuggestions.title}</span>
				<span>{suggestions.length}</span>
			</h2>
			<div>
				<CocktailSuggestion />
			</div>
		</div>
	);
}

export default MySuggestions;
