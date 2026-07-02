import type { Cocktails, IngredientListItem } from "../types/types";

export function getMissingCount(
	cocktail: Cocktails,
	selectedIngredients: IngredientListItem[],
): number {
	const cocktailIngredients = Array.from(
		{ length: 15 },
		(_, i) => cocktail[`strIngredient${i + 1}` as keyof Cocktails],
	).filter(Boolean) as string[];

	const selectedNames = selectedIngredients.map((i) =>
		i.strIngredient1.toLowerCase(),
	);

	return cocktailIngredients.filter(
		(ing) => !selectedNames.includes(ing.toLowerCase()),
	).length;
}
