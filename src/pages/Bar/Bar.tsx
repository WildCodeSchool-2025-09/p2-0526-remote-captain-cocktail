import { useEffect, useState } from "react";

import IngredientsDropdown from "../../components/IngredientsDropdown/IngredientsDropdown";
import IngredientsSearch from "../../components/IngredientsSearch/IngredientsSearch";
import MyIngredients from "../../components/MyIngredients/MyIngredients";
import MySuggestions from "../../components/MySuggestions/MySuggestions";

import styles from "./Bar.module.scss";

import Icon from "../../components/Icon/Icon";
import { BASE } from "../../config";
import t from "../../data/fr_FR.json";
import type { IngredientListItem } from "../../types/types";

export default function Bar() {
	// Récupérer la liste des ingrédients de l'API au chargement
	const [ingredients, setIngredients] = useState<IngredientListItem[]>([]);

	useEffect(() => {
		fetch(`${BASE}/list.php?i=list`)
			.then((res) => res.json())
			.then((data) => setIngredients(data.drinks));
	}, []);

	const [search, setSearch] = useState("");
	const filteredIngredients =
		search.length >= 3
			? ingredients.filter((ingredient) =>
					ingredient.strIngredient1
						.toLowerCase()
						.includes(search.toLowerCase()),
				)
			: [];

	// Ajouter/supprimer les ingrédients de mon bar
	const [selectedIngredients, setSelectedIngredients] = useState<
		IngredientListItem[]
	>([]);

	function handleSelectIngredient(ingredient: IngredientListItem) {
		setSelectedIngredients((prev) => {
			if (prev.some((i) => i.strIngredient1 === ingredient.strIngredient1))
				return prev;
			return [...prev, ingredient];
		});
	}

	function handleRemoveIngredient(ingredient: IngredientListItem) {
		setSelectedIngredients((prev) =>
			prev.filter((i) => i.strIngredient1 !== ingredient.strIngredient1),
		);
	}

	function handleClearIngredients() {
		setSelectedIngredients([]);
	}

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>
				<span>{t.bar.title}</span>
				<Icon name="palm" />
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
				<IngredientsDropdown
					ingredients={filteredIngredients}
					onSelect={handleSelectIngredient}
					search={search}
				/>
				<MyIngredients
					selectedIngredients={selectedIngredients}
					onRemove={handleRemoveIngredient}
					onClear={handleClearIngredients}
				/>
				<MySuggestions selectedIngredients={selectedIngredients} />
			</div>
		</div>
	);
}
