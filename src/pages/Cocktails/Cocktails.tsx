import { useEffect, useState } from "react";
import CocktailGrid from "../../components/CocktailGrid/CocktailGrid";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/Searchbar/SearchBar";
import type { Cocktails as CocktailType } from "../../types/types";
import styles from "./Cocktails.module.scss";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;

const CARDS_PER_PAGE = 9;

async function getAllDrinks() {
	const letters = "abcdefghijklmnopqrstuvwxyz".split("");
	const results = await Promise.all(
		letters.map((letter) =>
			fetch(`${BASE}/search.php?f=${letter}`)
				.then((res) => res.json())
				.then((data) => data.drinks ?? []),
		),
	);
	return results.flat();
}

function Cocktails() {
	const [cocktails, setCocktails] = useState<CocktailType[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [alcoholicFilter, setAlcoholicFilter] = useState<string>("");

	useEffect(() => {
		getAllDrinks().then((drinks) => setCocktails(drinks));
	}, []);

	const filteredCocktails = cocktails.filter((cocktail) => {
		const cleanQuery = searchQuery.trim().toLowerCase();

		let matchesText = true;
		if (cleanQuery !== "") {
			const matchesName = cocktail.strDrink.toLowerCase().includes(cleanQuery);
			let matchesIngredient = false;
			for (let i = 1; i <= 15; i++) {
				const ingredient = cocktail[`strIngredient${i}`];
				if (ingredient?.toLowerCase().includes(cleanQuery)) {
					matchesIngredient = true;
					break;
				}
			}
			matchesText = matchesName || matchesIngredient;
		}

		const matchesCategory = selectedCategory
			? cocktail.strCategory === selectedCategory
			: true;
		const matchesAlcoholic = alcoholicFilter
			? cocktail.strAlcoholic === alcoholicFilter
			: true;

		return matchesText && matchesCategory && matchesAlcoholic;
	});

	// calcul de la pagination
	const totalPages = Math.ceil(filteredCocktails.length / CARDS_PER_PAGE);
	const debut = (currentPage - 1) * CARDS_PER_PAGE;
	const fin = debut + CARDS_PER_PAGE;
	const pageCards = filteredCocktails.slice(debut, fin);

	return (
		<>
			<h1>All cocktails</h1>

			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				alcoholicFilter={alcoholicFilter}
				setAlcoholicFilter={setAlcoholicFilter}
			/>

			<p className={styles.numbers}>
				{filteredCocktails.length} cocktail(s) found
			</p>

			<CocktailGrid cocktails={pageCards} />

			{totalPages > 1 && (
				<Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
			)}

			<div className={styles["temp-bottom-bar"]} />
		</>
	);
}

export default Cocktails;
