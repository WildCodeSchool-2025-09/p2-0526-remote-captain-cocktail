import { useCocktailId } from "../../contexts/CocktailDetailsContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import { blueSignature } from "../../data/blueSignature";
import type { CocktailCardProps } from "../../types/types";
import Icon from "../Icon/Icon";
import styles from "./CocktailTrending.module.scss";

function CocktailTrending({ cocktail }: CocktailCardProps) {
	const { setCocktailId } = useCocktailId();
	const { isFavorite, toggleFavorite } = useFavorites();
	const isCurrentFavorite = isFavorite(cocktail.idDrink);

	return (
		<section
			className={styles["cocktail-trending"]}
			aria-label={blueSignature.strDrink}
		>
			<div className={styles["cocktail-info"]}>
				<h2 className={styles["cocktail-name"]}>{blueSignature.strDrink}</h2>
				<p className={styles["cocktail-tagline"]}>World Cup Edition</p>
				<button
					type="button"
					className={styles["btn-recipe"]}
					command="show-modal"
					commandfor="my-dialog"
					onClick={() => setCocktailId(blueSignature.idDrink)}
				>
					See recipe
				</button>
			</div>
			<img
				className={styles["cocktail-img"]}
				src="/assets/images/cocktails/blue-signature-cut.png"
				alt=""
			/>
			<button
				type="button"
				className={styles["btn-favorite"]}
				aria-label={
					isCurrentFavorite ? "Remove from favorites" : "Add to favorites"
				}
				onClick={() => toggleFavorite(cocktail.idDrink)}
			>
				<Icon
					name={isCurrentFavorite ? "fullheart" : "heart"}
					className={styles["icon-heart"]}
				/>
			</button>
		</section>
	);
}

export default CocktailTrending;
