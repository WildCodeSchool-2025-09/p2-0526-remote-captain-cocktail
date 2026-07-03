import type { Cocktails } from "../../types/types";
import styles from "./CocktailCard.module.scss";

interface Props {
	cocktail: Cocktails;
}

function CocktailCard({ cocktail }: Props) {
	return (
		<article>
			<button type="button">
				<img
					className={styles["icon-heart"]}
					src="/assets/icons/heart.svg"
					alt="ajouter aux favoris"
				/>
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
