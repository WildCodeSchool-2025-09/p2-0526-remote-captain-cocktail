import { useEffect, useState } from "react";
import CocktailGrid from "../../components/CocktailGrid/CocktailGrid";
import Icon from "../../components/Icon/Icon";
import Pagination from "../../components/Pagination/Pagination";
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

	useEffect(() => {
		getAllDrinks().then((drinks) => setCocktails(drinks));
	}, []);

	const totalPages = Math.ceil(cocktails.length / CARDS_PER_PAGE);
	const debut = (currentPage - 1) * CARDS_PER_PAGE;
	const fin = debut + CARDS_PER_PAGE;
	const pageCards = cocktails.slice(debut, fin);

	return (
		<>
			<h1>Tous les cocktails</h1>
			<nav className={styles["search-nav"]}>
				<div className={styles["search-row"]}>
					<div className={styles["search-bar"]}>
						<Icon name="search" className={styles["icon-search"]} />
						<input type="text" placeholder="Rechercher un cocktail..." />
					</div>

					<button type="button">
						<Icon name="sort" className={styles["icon-sort"]} />
					</button>
				</div>

				<div className={styles["filter-row"]}>
					<button type="button" className={styles["btn-active"]}>
						Tous
					</button>
					<button type="button">Filtre 2</button>
					<button type="button">Filtre 3</button>
					<button type="button">Filtre 4</button>
				</div>
			</nav>

			<CocktailGrid cocktails={pageCards} />

			{totalPages > 1 && (
				<Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
			)}

			<div className={styles["temp-bottom-bar"]} />
		</>
	);
}

export default Cocktails;
