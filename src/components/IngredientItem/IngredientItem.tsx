import type { IngredientProps } from "../../types/types";
import styles from "./IngredientItem.module.scss";

function IngredientItem({ strIngredient, strMeasure }: IngredientProps) {
	return (
		<>
			{!strIngredient ? null : (
				<li className={styles["ingr-and-measure"]}>
					<img
						className={styles["ingredient-img"]}
						src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`}
						alt={`${strIngredient}`}
					/>
					<div className={styles["ing-txt"]}>
						<span className={styles["ing-name"]}>{strIngredient}</span>
						{!strMeasure ? null : (
							<span className={styles["ing-measure"]}>{strMeasure}</span>
						)}
					</div>
				</li>
			)}
		</>
	);
}

export default IngredientItem;
