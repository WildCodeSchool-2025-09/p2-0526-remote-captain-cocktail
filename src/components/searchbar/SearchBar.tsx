import { useEffect, useState } from "react";
import type { Category } from "../../types/types";
import styles from "./SearchBar.module.scss";
import sortIcon from "../../assets/icons/sort.svg";

interface SearchBarProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	setSelectedCategory: (category: string) => void;
	selectedCategory: string;
	alcoholicFilter: string;
	setAlcoholicFilter: (filter: string) => void;
	onSortChange?: (isAscending: boolean) => void,
}

function SearchBar({
	searchQuery,
	setSearchQuery,
	selectedCategory,
	setSelectedCategory,
	alcoholicFilter,
	setAlcoholicFilter,
	onSortChange,	
}: SearchBarProps) {
	const [categories, setCategories] = useState<Category[]>([]);
	const [sortAscending, setSortAscending] = useState<boolean>(true);

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
			<div className={styles["searchbar-container"]}>
				<div className={styles["input-wrapper"]}>
					<input
						className={styles["search-input"]}
						type="text"
						placeholder="Search..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					{searchQuery && (
						<button
							type="button"
							className={styles["clear-button"]}
							onClick={() => setSearchQuery("")}
						>
							×
						</button>
					)}
				</div>
				<button
					type="button"
    				className={`${styles["sort-button"]} ${sortAscending ? styles["active-sort-asc"] : styles["active-sort-desc"]}`}
    				onClick={() => {
        				setSortAscending(!sortAscending);
        				onSortChange?.(!sortAscending);
    				}}
    				title={sortAscending ? "Trier Z→A" : "Trier A→Z"}
				>
    			<img src={sortIcon} alt="Sort" className={styles["sort-icon"]} />
				</button>
				
			</div>
			<div className={styles["filter-container"]}>
				<div className={styles["badge-container"]}>
					{[
						{ label: "All", value: "" },
						{ label: "With alcohol", value: "Alcoholic" },
						{ label: "Without alcohol", value: "Non alcoholic" },
						{ label: "Optionnal", value: "Optional alcohol" },
					].map((type) => {
						const isSelected = alcoholicFilter === type.value;
						const badgeClass = `${styles.badge} ${isSelected ? styles["active-alcool"] : ""}`;

						return (
							<button
								type="button"
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
			<div className={styles["filter-container"]}>
				<div className={styles["badge-container"]}>
					{categories.map((category) => {
						const isSelected = selectedCategory === category.strCategory;
						const badgeClass = `${styles.badge} ${isSelected ? styles["active-category"] : ""}`;

						return (
							<button
								type="button"
								key={category.strCategory}
								onClick={() =>
									setSelectedCategory(isSelected ? "" : category.strCategory)
								}
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
