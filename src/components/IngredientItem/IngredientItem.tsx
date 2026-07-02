import styles from "./IngredientItem.module.scss";

function IngredientItem(props) {
	return (
		<article>
			{!props.strIngredient ? (
				""
			) : (
				<li className={styles["ingr-and-measure"]}>
					<img
						className={styles["ingredient-img"]}
						src={`https://www.thecocktaildb.com/images/ingredients/${props.strIngredient}.png`}
						alt=""
					/>
					<div className={styles["ing-txt"]}>
						<span className={styles["ing-name"]}>{props.strIngredient}</span>
						{!props.strMeasure ? (
							""
						) : (
							<span className={styles["ing-measure"]}>{props.strMeasure}</span>
						)}
					</div>
				</li>
			)}
		</article>
	);
}
export default IngredientItem;
