import { useCocktailId } from "../../contexts/CocktailDetailsContext";
import { blueSignature } from "../../data/blueSignature";
import styles from "./CocktailTrending.module.scss";

function CocktailTrending() {
	const { setCocktailId } = useCocktailId();
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
		</section>
	);
}

export default CocktailTrending;
