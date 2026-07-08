import { useState } from "react";
import type { CocktailCardProps } from "../../types/types";
import CocktailDetails from "../CocktailDetails/CocktailDetails";
import Icon from "../Icon/Icon";
import styles from "./CocktailCard.module.scss";

function CocktailCard({ cocktail }: CocktailCardProps) {
	const [isFavorite, setIsFavorite] = useState(false);
	return (
		<article>
			<button
				type="button"
				className={styles["btn-favorite"]}
				aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
				onClick={() => setIsFavorite(!isFavorite)}
			>
				<Icon
					name={isFavorite ? "heart-filled" : "heart"}
					className={styles["icon-heart"]}
				/>
			</button>
			<button
				type="button"
				className={styles["card-details"]}
				// @ts-expect-error command/commandfor sont de nouveaux attributs HTML pas encore dans les types React
				command="show-modal"
				commandfor="my-dialog"
			>
				<img
					className={styles["card-img"]}
					src={cocktail.strDrinkThumb}
					alt={cocktail.strDrink}
				/>
				<p>{cocktail.strDrink}</p>
			</button>
			<dialog id="my-dialog">
				<CocktailDetails idDrink={cocktail.idDrink} />
			</dialog>
		</article>
	);
}

export default CocktailCard;
