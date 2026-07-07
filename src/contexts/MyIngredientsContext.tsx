import { type ReactNode, createContext, useContext, useState } from "react";
import type { IngredientListItem } from "../types/types";

interface MyIngredientsContextType {
	myIngredients: IngredientListItem[];
	handleSelect: (ingredient: IngredientListItem) => void;
	handleRemove: (ingredient: IngredientListItem) => void;
	handleClear: () => void;
}

const MyIngredientsContext = createContext<MyIngredientsContextType | null>(
	null,
);

export function MyIngredientsProvider({ children }: { children: ReactNode }) {
	const [myIngredients, setMyIngredients] = useState<IngredientListItem[]>([]);

	function handleSelect(ingredient: IngredientListItem) {
		setMyIngredients((prev) => {
			if (prev.some((i) => i.strIngredient1 === ingredient.strIngredient1))
				return prev;
			return [...prev, ingredient];
		});
	}

	function handleRemove(ingredient: IngredientListItem) {
		setMyIngredients((prev) =>
			prev.filter((i) => i.strIngredient1 !== ingredient.strIngredient1),
		);
	}

	function handleClear() {
		setMyIngredients([]);
	}

	return (
		<MyIngredientsContext.Provider
			value={{ myIngredients, handleSelect, handleRemove, handleClear }}
		>
			{children}
		</MyIngredientsContext.Provider>
	);
}

export function useMyIngredients() {
	const value = useContext(MyIngredientsContext);
	if (value === null) {
		throw new Error(
			"useMyIngredients has to be used within <MyIngredientsProvider>",
		);
	}
	return value;
}
