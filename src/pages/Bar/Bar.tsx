import { useEffect, useState } from "react";

import IngredientsDropdown from "../../components/IngredientsDropdown/IngredientsDropdown";
import IngredientsSearch from "../../components/IngredientsSearch/IngredientsSearch";
import MyIngredients from "../../components/MyIngredients/MyIngredients";
import MySuggestions from "../../components/MySuggestions/MySuggestions";

import styles from "./Bar.module.scss";

import Icon from "../../components/Icon/Icon";
import { BASE } from "../../config";
import { useMyIngredients } from "../../contexts/MyIngredientsContext";
import t from "../../data/en_EN.json";
import type { IngredientListItem } from "../../types/types";

export default function Bar() {
	const { myIngredients, handleSelect, handleRemove, handleClear } =
		useMyIngredients();

	const [ingredients, setIngredients] = useState<IngredientListItem[]>([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch(`${BASE}/list.php?i=list`)
			.then((res) => res.json())
			.then((data) => setIngredients(data.drinks));
	}, []);

	const filteredIngredients =
		search.length >= 3
			? ingredients.filter((ingredient) =>
					ingredient.strIngredient1
						.toLowerCase()
						.includes(search.toLowerCase()),
				)
			: [];

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>
				<span>{t.bar.title}</span>
				<Icon name="palm" />
			</h1>
			<IngredientsSearch search={search} setSearch={setSearch} />
			{myIngredients.length === 0 && search.length === 0 && (
				<div className={styles["how-to"]}>
					<h3>{t.bar.howTo.title}</h3>
					<ul>
						{t.bar.howTo.steps.map((step, i) => (
							<li key={step.id} className={`${styles[step.id]}`}>
								<span>{i + 1}</span>
								<div>
									<span>{step.line1}</span>
									<span>{step.line2}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
			<div>
				<IngredientsDropdown
					ingredients={filteredIngredients}
					onSelect={handleSelect}
					search={search}
				/>
				<MyIngredients
					selectedIngredients={myIngredients}
					onRemove={handleRemove}
					onClear={handleClear}
				/>
				<MySuggestions selectedIngredients={myIngredients} />
			</div>
		</div>
	);
}
