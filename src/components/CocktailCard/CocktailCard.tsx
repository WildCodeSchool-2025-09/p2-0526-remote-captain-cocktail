import type { Cocktails } from "../../types/types";
import Icon from "../Icon/Icon";
import styles from "./CocktailCard.module.scss";

interface Props {
	cocktail: Cocktails;
}

function CocktailCard({ cocktail }: Props) {
	return (
		<article>
			<button type="button" aria-label="ajouter aux favoris">
				<Icon name="heart" className={styles["icon-heart"]} />
			</button>
			<img
				className={styles["card-img"]}
				src={cocktail.strDrinkThumb}
				alt={cocktail.strDrink}
			/>
			<p>{cocktail.strDrink}</p>
		</article>
	);
}

export default CocktailCard;
