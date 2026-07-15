import { useEffect, useState } from "react";
import CocktailGrid from "../../components/CocktailGrid/CocktailGrid";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useFavorites } from "../../contexts/FavoritesContext";
import type { Cocktail } from "../../types/types";
import { getCocktailById } from "../../utils/getCocktailById";
import styles from "./Favorites.module.scss";

const CARDS_PER_PAGE = 12;

function Favorites() {
	const { favorites } = useFavorites();
	const [cocktails, setCocktails] = useState<Cocktail[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [alcoholicFilter, setAlcoholicFilter] = useState<string>("");

	useEffect(() => {
		async function fetchFavorites() {
			setLoading(true);
			const results = await Promise.all(
				favorites.map((id) => getCocktailById(id)),
			);
			setCocktails(results.filter((c): c is Cocktail => c !== null));
			setLoading(false);
		}
		if (favorites.length > 0) {
			fetchFavorites();
		} else {
			setCocktails([]);
			setLoading(false);
		}
	}, [favorites]);
	if (loading) return <p>Favorites loading</p>;
	if (favorites.length === 0)
		return <p>You have no favorites at the moment.</p>;

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

	const totalPages = Math.ceil(filteredCocktails.length / CARDS_PER_PAGE);
	const start = (currentPage - 1) * CARDS_PER_PAGE;
	const end = start + CARDS_PER_PAGE;
	const pageCards = filteredCocktails.slice(start, end);

	return (
		<>
			<main className={styles["page-cards"]}>
				<section className={styles.header}>
					<h1>Favorites</h1>
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						alcoholicFilter={alcoholicFilter}
						setAlcoholicFilter={setAlcoholicFilter}
					/>
				</section>

				<section className={styles.cards}>
					<p className={styles.numbers}>
						{filteredCocktails.length} cocktail(s) found
					</p>
					<CocktailGrid cocktails={pageCards} />
				</section>

				<div className={styles.pagination}>
					{totalPages > 1 && (
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={setCurrentPage}
						/>
					)}
				</div>
			</main>
		</>
	);
}

export default Favorites;
