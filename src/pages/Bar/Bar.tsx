import { useEffect, useState } from "react";

import IngredientsDropdown from "../../components/IngredientsDropdown/IngredientsDropdown";
import IngredientsSearch from "../../components/IngredientsSearch/IngredientsSearch";
import MyIngredients from "../../components/MyIngredients/MyIngredients";
import MySuggestions from "../../components/MySuggestions/MySuggestions";

import styles from "./Bar.module.scss";

import t from "../../data/fr_FR.json";
import type { IngredientListItem } from "../../types/types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;

function Bar() {
	const [ingredients, setIngredients] = useState<IngredientListItem[]>([]);

	useEffect(() => {
		fetch(`${BASE}/list.php?i=list`)
			.then((res) => res.json())
			.then((data) => setIngredients(data.drinks));
	}, []);

	const [search, setSearch] = useState("");

	// async function getAllDrinks() {
	// 	const letters = "abcdefghijklmnopqrstuvwxyz".split("");
	// 	const results = await Promise.all(
	// 		letters.map((letter) =>
	// 			fetch(`${BASE}/search.php?f=${letter}`)
	// 				.then((res) => res.json())
	// 				.then((data) => data.drinks ?? []),
	// 		),
	// 	);
	// 	return results.flat();
	// }

	// useEffect(() => {
	// 	getAllDrinks().then((drinks) => setCocktails(drinks));
	// }, []);

	return (
		<div className={styles["bar-page"]}>
			{console.log(ingredients)}
			<h1 className={styles["bar-title"]}>
				<span>{t.bar.title}</span>
				<img src="/assets/icons/palm.svg" alt="title icon" />
			</h1>
			<IngredientsSearch search={search} setSearch={setSearch} />
			<div className="how-to">
				<h3>{t.bar.howTo.title}</h3>
				<ul>
					{t.bar.howTo.steps.map((step, i) => (
						<li key={step.id}>
							<span>{i + 1}</span>
							<div>
								<span>{step.line1}</span>
								<span>{step.line2}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div>
				<IngredientsDropdown />
				<MyIngredients />
				<MySuggestions />
			</div>
		</div>
	);
}

export default Bar;
