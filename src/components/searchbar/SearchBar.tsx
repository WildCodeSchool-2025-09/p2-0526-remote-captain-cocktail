import { useEffect, useState } from "react";
import type { Category } from "../../types/types";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	setSelectedCategory: (category: string) => void;
	selectedCategory: string;
	alcoholicFilter: string;
	setAlcoholicFilter: (filter: string) => void;
}

function SearchBar({
	searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, alcoholicFilter, setAlcoholicFilter }: SearchBarProps) {
	const [categories, setCategories] = useState<Category[]>([]);

	const API_KEY = import.meta.env.VITE_API_KEY;
	const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;

	useEffect(() => {
		fetch(`${BASE}/list.php?c=list`)
			.then((res) => res.json())
			.then((data) => {
				if (data.drinks) {
					setCategories(data.drinks);
				}
			})
			.catch((error) => {
				console.error("Error fetchging categories", error);
			});
	}, [BASE]);

	return (
		<>
			<div className={styles.searchBarContainer}>
				<div className={styles.inputwrapper}>
					<input
						className={styles.searchInput}
						type="text"
						placeholder="Search for a cocktail or an ingredient"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					{searchQuery && (
						<button
							className={styles.clearButton}
							onClick={() => setSearchQuery("")}
						>
							×
						</button>
					)}
				</div>
			</div>
			<div className={styles.filterContainer}>
				<div className={styles.badgeContainer}>
					{[
						{ label: "All", value: "" },
						{ label: "With alcohol", value: "Alcoholic" },
						{ label: "Without alcohol", value: "Non alcoholic" },
						{ label: "Optionnal", value: "Optional alcohol" }

					].map((type) => {
						const isSelected = alcoholicFilter === type.value;
						const badgeClass = `${styles.badge} ${isSelected ? styles.activeAlcool : ""}`;

						return (
							<button
								key={type.value}
								onClick={() => setAlcoholicFilter(type.value)}
								className={badgeClass}
							>
								{type.label}
							</button>
						);
					})}
				</div>
			</div>
			<div className={styles.filterContainer}>
				<div className={styles.badgeContainer}>
					{categories.map((category) => {
						const isSelected = selectedCategory === category.strCategory;
						const badgeClass = `${styles.badge} ${isSelected ? styles.activeCategory : ""}`;

						return (
							<button
								key={category.strCategory}
								onClick={() => setSelectedCategory(isSelected ? "" : category.strCategory)}
								className={badgeClass}
							>
								{category.strCategory}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default SearchBar;

