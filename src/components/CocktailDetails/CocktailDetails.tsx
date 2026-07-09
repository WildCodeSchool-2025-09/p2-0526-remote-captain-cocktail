import { useCallback, useEffect, useState } from "react";
import { API_BASE } from "../../config";
import type { Cocktail, CocktailDetailsProps } from "../../types/types";
import CocktailTags from "../CocktailTags/CocktailTags";
import Icon from "../Icon/Icon";
import IngredientItem from "../IngredientItem/IngredientItem";
import styles from "./CocktailDetails.module.scss";

function CocktailDetails({ idDrink }: CocktailDetailsProps) {
	const [fav, setFav] = useState(false);
	function handleFav() {
		setFav(!fav);
	}

	const [translate, setTranslate] = useState(false);

	// const { id } = useParams();
	const [cocktailDetails, setCocktailDetails] = useState<Cocktail | null>(null);
	const [error, setError] = useState(false);
	const fetchCocktail = useCallback(() => {
		setError(false);
		fetch(`${API_BASE}/lookup.php?i=${idDrink}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network Error");
				}
				return response.json();
			})
			.then((data) => {
				setCocktailDetails(data.drinks[0]);
			})
			.catch(() => {
				setError(true);
			});
	}, [idDrink]);
	useEffect(() => {
		fetchCocktail();
	}, [fetchCocktail]);
	if (error) {
		return (
			<article className={`${styles["not-found"]} ${styles["cocktail-card"]}`}>
				<button
					type="button"
					commandfor="my-dialog"
					command="close"
					className={`${styles["arrow-left-button"]} ${styles["pink-button"]}`}
				>
					<Icon name="arrowleft" />
				</button>
				<Icon className={styles.exclamationpoint} name="exclamationpoint" />
				<h2>Cocktail not found</h2>
				<p>An error occurred. Please check your connection and try again.</p>
				<button type="reset" onClick={fetchCocktail}>
					Try again
				</button>
			</article>
		);
	}
	if (!cocktailDetails) {
		return (
			<article className={`${styles["not-found"]} ${styles["cocktail-card"]}`}>
				<button
					type="button"
					commandfor="my-dialog"
					command="close"
					className={`${styles["arrow-left-button"]} ${styles["pink-button"]}`}
				>
					<Icon name="arrowleft" />
				</button>
				<p>Loading ...</p>
			</article>
		);
	}

	return (
		<article className={styles["cocktail-card"]}>
			<button
				type="button"
				commandfor="my-dialog"
				command="close"
				className={`${styles["arrow-left-button"]} ${styles["pink-button"]}`}
			>
				<Icon name="arrowleft" />
			</button>
			<div className={styles["cocktail-img-favheart"]}>
				<img
					className={styles["cocktail-img"]}
					src={cocktailDetails.strDrinkThumb}
					alt="cocktail name"
				/>
				<button type="button" onClick={handleFav} className={styles.favheart}>
					{!fav ? <Icon name="heart" /> : <Icon name="fullheart" />}
				</button>
			</div>
			<h1>{cocktailDetails.strDrink}</h1>
			<ul className={styles["cocktail-tags"]}>
				<li className={styles.alcool}>{cocktailDetails.strAlcoholic}</li>
				<li>{cocktailDetails.strCategory}</li>
			</ul>
			<div className={styles["recipe-specs"]}>
				<p>🕙 10 min</p>
				<p>👩‍👦 1 pers.</p>
				<p>
					⭐ Difficulty :
					{cocktailDetails.strIngredient6
						? " Hard"
						: cocktailDetails.strIngredient4
							? " Medium"
							: " Easy"}
				</p>
			</div>
			<h2>INGREDIENTS</h2>
			<ul className={styles.ingredients}>
				{Array.from({ length: 15 }, (_, index) => index + 1).map((value) => (
					<IngredientItem
						key={value}
						strIngredient={cocktailDetails[`strIngredient${value}`]}
						strMeasure={cocktailDetails[`strMeasure${value}`]}
					/>
				))}
			</ul>
			<h2>PREPARATION</h2>
			<div className={styles.preparation}>
				{!cocktailDetails.strInstructionsFR ? (
					<p>{cocktailDetails.strInstructions}</p>
				) : (
					<>
						<p>{cocktailDetails.strInstructions}</p>
						<button
							type="button"
							className={styles["pink-button"]}
							onClick={() => setTranslate(!translate)}
						>
							Translate to French
						</button>
						{translate && <p>{cocktailDetails.strInstructionsFR}</p>}
					</>
				)}
			</div>
			<h2>INFORMATIONS</h2>
			<CocktailTags
				strIBA={cocktailDetails.strIBA}
				strGlass={cocktailDetails.strGlass}
				strTags={cocktailDetails.strTags}
			/>
			<button
				type="button"
				className={styles["pink-button"]}
				commandfor="my-dialog"
				command="close"
			>
				Close
			</button>
		</article>
	);
}

export default CocktailDetails;
