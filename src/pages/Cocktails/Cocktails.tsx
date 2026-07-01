import { useEffect, useState } from "react";
import type { Cocktails as CocktailCard } from "../../types/types";
import styles from "./Cocktails.module.scss";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;

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
	const [cocktails, setCocktails] = useState<CocktailCard[]>([]);

	useEffect(() => {
		getAllDrinks().then((drinks) => setCocktails(drinks));
	}, []);

	return (
		<>
			<h1>Tous les cocktails</h1>
			<nav className={styles["search-nav"]}>
				<div className={styles["search-row"]}>
					<div className={styles["search-bar"]}>
						<img
							className={styles["icon-search"]}
							src="/assets/icons/search.svg"
							alt="rechercher"
						/>
						<input type="text" placeholder="Rechercher un cocktail..." />
					</div>

					<button type="button">
						<img
							className={styles["icon-sort"]}
							src="/assets/icons/sort.svg"
							alt="trier"
						/>
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

			<section className={styles["cocktails-grid"]}>
				{cocktails.map((cocktail) => (
					<article key={cocktail.idDrink}>
						<button type="button">
							<img
								className={styles["icon-heart"]}
								src="/assets/icons/heart.svg"
								alt="ajouter aux favoris"
							/>
						</button>
						<img
							className={styles["card-img"]}
							src={cocktail.strDrinkThumb}
							alt={`${cocktail.strDrink}`}
						/>
						<p>{cocktail.strDrink}</p>
					</article>
				))}
			</section>
			<div className={styles["temp-bottom-bar"]} />
		</>
	);
}

export default Cocktails;
