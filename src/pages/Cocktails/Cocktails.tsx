import { useEffect, useState } from "react";
import type { Cocktails as CocktailItem } from "../../types/types";

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
	const [cocktails, setCocktails] = useState<CocktailItem[]>([]);

	useEffect(() => {
		getAllDrinks().then((drinks) => setCocktails(drinks));
	}, []);

	return (
		<>
			<h1>Tous les cocktails</h1>
			<nav>
				<div>
					<img src="/assets/icons/search.svg" alt="rechercher" />
					<input type="text" placeholder="Rechercher un cocktail..." />
				</div>
				<button type="button">
					<img src="/assets/icons/sort.svg" alt="trier" />
				</button>
				<button type="button">Nom du filtre</button>
				<button type="button">Nom du filtre</button>
				<button type="button">Nom du filtre</button>
				<button type="button">Nom du filtre</button>
			</nav>
			{cocktails.map((cocktail) => (
				<article key={cocktail.idDrink}>
					<button type="button">
						<img src="/assets/icons/heart.svg" alt="ajouter aux favoris" />
					</button>
					<img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
					<p>{cocktail.strDrink}</p>
				</article>
			))}
		</>
	);
}

export default Cocktails;
