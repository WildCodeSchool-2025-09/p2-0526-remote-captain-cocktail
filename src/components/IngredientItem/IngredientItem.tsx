import styles from "./IngredientItem.module.scss";

export interface IngredientProps {
	strIngredient?: string;
	strMeasure?: string;
}

function IngredientItem({ strIngredient, strMeasure }: IngredientProps) {
	return (
		<article>
			{!strIngredient ? (
				""
			) : (
				<li className={styles["ingr-and-measure"]}>
					<img
						className={styles["ingredient-img"]}
						src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`}
						alt=""
					/>
					<div className={styles["ing-txt"]}>
						<span className={styles["ing-name"]}>{strIngredient}</span>
						{!strMeasure ? (
							""
						) : (
							<span className={styles["ing-measure"]}>{strMeasure}</span>
						)}
					</div>
				</li>
			)}
		</article>
	);
}
export default IngredientItem;
