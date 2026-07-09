import { useState } from "react";
import { useCocktailId } from "../../contexts/CocktailDetailsContext";
import type { CocktailCardProps } from "../../types/types";
import Icon from "../Icon/Icon";
import styles from "./CocktailCard.module.scss";

function CocktailCard({ cocktail }: CocktailCardProps) {
	const { setCocktailId } = useCocktailId();
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<article className={styles.article}>
			<button
				type="button"
				className={styles["btn-favorite"]}
				aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
				onClick={() => setIsFavorite(!isFavorite)}
			>
				<Icon
					name={isFavorite ? "fullheart" : "heart"}
					className={styles["icon-heart"]}
				/>
			</button>
			<button
				type="button"
				className={styles["card-details"]}
				command="show-modal"
				commandfor="my-dialog"
				onClick={() => {
					setCocktailId(cocktail.idDrink);
				}}
			>
				<img
					className={styles["card-img"]}
					src={cocktail.strDrinkThumb}
					alt={cocktail.strDrink}
				/>
				<p>{cocktail.strDrink}</p>
			</button>
		</article>
	);
}

export default CocktailCard;
