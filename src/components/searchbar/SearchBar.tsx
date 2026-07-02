import { useCallback, useEffect, useMemo, useState } from "react";
import type { Cocktails } from "../../types/types";

interface SearchBarProps {
	onFilteredData: (cocktails: Cocktails[]) => void;
}

function SearchBar({ onFilteredData }: SearchBarProps) {
	const [cocktails, setCocktails] = useState<Cocktails[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const API_KEY = import.meta.env.VITE_API_KEY;
	const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;

	const getAllDrinks = useCallback(async () => {
		const letters = "abcdefghijklmnopqrstuvwxyz".split("");
		const results = await Promise.all(
			letters.map((letter) =>
				fetch(`${BASE}/search.php?f=${letter}`)
					.then((res) => res.json())
					.then((data) => (data.drinks as Cocktails[] | null) ?? []),
			),
		);
		return results.flat();
	}, [BASE]);

	useEffect(() => {
		getAllDrinks().then((drinks) => setCocktails(drinks));
	}, [getAllDrinks]);

	const filteredCocktails = useMemo(() => {
		if (!cocktails.length) return [];

		if (!searchTerm.trim()) return cocktails;

		const term = searchTerm.toLowerCase().trim();

		return cocktails.filter((drink) => {
			return drink.strDrink?.toLowerCase().includes(term) ?? false;
		});
	}, [cocktails, searchTerm]);

	useEffect(() => {
		onFilteredData(filteredCocktails);
	}, [filteredCocktails, onFilteredData]);

	return (
		<div>
			<input
				type="text"
				placeholder="Rechercher un cocktail..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<p>{filteredCocktails.length} cocktail(s) trouvé(s)</p>
		</div>
	);
}

export default SearchBar;
