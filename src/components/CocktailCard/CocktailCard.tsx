import { useState } from "react";
import { Link } from "react-router-dom";
import type { Cocktails } from "../../types/types";
import Icon from "../Icon/Icon";
import styles from "./CocktailCard.module.scss";

interface Props {
	cocktail: Cocktails;
}

function CocktailCard({ cocktail }: Props) {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<article>
			<button type="button" onClick={() => setIsFavorite(!isFavorite)}>
				<Icon
					name={isFavorite ? "heart-filled" : "heart"}
					className={styles["icon-heart"]}
				/>
			</button>
			<Link
				className={styles["card-details"]}
				to={`/cocktail/${cocktail.idDrink}`}
			>
				<img
					className={styles["card-img"]}
					src={cocktail.strDrinkThumb}
					alt={cocktail.strDrink}
				/>
				<p>{cocktail.strDrink}</p>
			</Link>
		</article>
	);
}

export default CocktailCard;
