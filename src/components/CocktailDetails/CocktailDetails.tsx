import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Cocktails } from "../../types/types";
import styles from "./CocktailDetails.module.scss";

const excludeTags = [
	"IBA",
	"Alcoholic",
	"Non alcoholic",
	"Optionnal alcohol",
	"ContemporaryClassic",
];

function CocktailDetails() {
	const { id } = useParams();
	const [cocktailDetails, setCocktailDetails] = useState<Cocktails | null>(
		null,
	);
	const [error, setError] = useState(false);
	const fetchCocktail = useCallback(() => {
		setError(false);
		const API_KEY = import.meta.env.VITE_API_KEY;
		const BASE = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}`;
		fetch(`${BASE}/lookup.php?i=${id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Erreur réseau");
				}
				return response.json();
			})
			.then((data) => {
				setCocktailDetails(data.drinks[0]);
			})
			.catch(() => {
				setError(true);
			});
	}, [id]);
	useEffect(() => {
		fetchCocktail();
	}, [fetchCocktail]);
	if (error) {
		return (
			<article className={`${styles["not-found"]} ${styles["cocktail-card"]}`}>
				<br />
				<div className={styles.exclamationpoint} aria-hidden="true">
					<span className={styles.icon} />
				</div>
				<br />
				<h2>Cocktail introuvable</h2>
				<br />
				<p>Une erreur est survenue. Vérifiez votre connexion et réessayez.</p>
				<br />
				<button type="reset" onClick={fetchCocktail}>
					Réessayer
				</button>
				<br />
			</article>
		);
	}
	if (!cocktailDetails) {
		return (
			<article className={`${styles["not-found"]} ${styles["cocktail-card"]}`}>
				<p>Chargement ...</p>
			</article>
		);
	}

	return (
		<article className={styles["cocktail-card"]}>
			<h1>Details et recette de {cocktailDetails.strDrink}</h1>
			<img
				className={styles["cocktail-img"]}
				src={cocktailDetails.strDrinkThumb}
				alt="cocktail name"
			/>
			<img
				className={styles.favheart}
				src="../assets/icons/heart.svg"
				alt="icon heart favorite"
			/>
			<h2>{cocktailDetails.strDrink}</h2>
			<div className={styles["cocktail-tags"]}>
				<ul>
					<li className={styles.alcool}>
						{cocktailDetails.strAlcoholic === "Alcoholic"
							? "Alcoolisé"
							: "Sans alcool"}
					</li>
					<li>{cocktailDetails.strCategory}</li>
				</ul>
			</div>
			<div className="recipe-specs">
				<p>10 min</p>
				<p>2 pers.</p>
				<p>Facile</p>
			</div>
			<h3>INGREDIENTS</h3>
			<ul>
				<li>
					<img
						className={styles["ingredient-img"]}
						src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient1}.png`}
						alt=""
					/>
					{cocktailDetails.strIngredient1}
					{!cocktailDetails.strMeasure1
						? ""
						: ` : ${cocktailDetails.strMeasure1}`}
				</li>
				{!cocktailDetails.strIngredient2 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient2}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient2}{" "}
						{!cocktailDetails.strMeasure2
							? ""
							: ` : ${cocktailDetails.strMeasure2}`}
					</li>
				)}
				{!cocktailDetails.strIngredient3 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient3}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient3}{" "}
						{!cocktailDetails.strMeasure3
							? ""
							: ` : ${cocktailDetails.strMeasure3}`}
					</li>
				)}
				{!cocktailDetails.strIngredient4 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient4}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient4}{" "}
						{!cocktailDetails.strMeasure4
							? ""
							: ` : ${cocktailDetails.strMeasure4}`}
					</li>
				)}
				{!cocktailDetails.strIngredient5 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient5}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient5}{" "}
						{!cocktailDetails.strMeasure5
							? ""
							: ` : ${cocktailDetails.strMeasure5}`}
					</li>
				)}
				{!cocktailDetails.strIngredient6 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient6}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient6}{" "}
						{!cocktailDetails.strMeasure6
							? ""
							: ` : ${cocktailDetails.strMeasure6}`}
					</li>
				)}
				{!cocktailDetails.strIngredient7 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient7}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient7}{" "}
						{!cocktailDetails.strMeasure7
							? ""
							: ` : ${cocktailDetails.strMeasure7}`}
					</li>
				)}
				{!cocktailDetails.strIngredient8 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient8}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient8}{" "}
						{!cocktailDetails.strMeasure8
							? ""
							: ` : ${cocktailDetails.strMeasure8}`}
					</li>
				)}
				{!cocktailDetails.strIngredient9 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient9}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient9}{" "}
						{!cocktailDetails.strMeasure9
							? ""
							: ` : ${cocktailDetails.strMeasure9}`}
					</li>
				)}
				{!cocktailDetails.strIngredient10 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient10}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient10}{" "}
						{!cocktailDetails.strMeasure10
							? ""
							: ` : ${cocktailDetails.strMeasure10}`}
					</li>
				)}
				{!cocktailDetails.strIngredient11 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient11}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient11}{" "}
						{!cocktailDetails.strMeasure11
							? ""
							: ` : ${cocktailDetails.strMeasure11}`}
					</li>
				)}
				{!cocktailDetails.strIngredient12 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient12}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient12}{" "}
						{!cocktailDetails.strMeasure12
							? ""
							: ` : ${cocktailDetails.strMeasure12}`}
					</li>
				)}
				{!cocktailDetails.strIngredient13 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient13}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient13}{" "}
						{!cocktailDetails.strMeasure13
							? ""
							: ` : ${cocktailDetails.strMeasure13}`}
					</li>
				)}
				{!cocktailDetails.strIngredient14 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient14}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient14}
						{!cocktailDetails.strMeasure14
							? ""
							: ` : ${cocktailDetails.strMeasure14}`}
					</li>
				)}
				{!cocktailDetails.strIngredient15 ? (
					<li />
				) : (
					<li>
						<img
							className={styles["ingredient-img"]}
							src={`https://www.thecocktaildb.com/images/ingredients/${cocktailDetails.strIngredient15}.png`}
							alt=""
						/>
						{cocktailDetails.strIngredient15}
						{!cocktailDetails.strMeasure15
							? ""
							: ` : ${cocktailDetails.strMeasure15}`}
					</li>
				)}
			</ul>
			<h3>PRÉPARATION</h3>
			{!cocktailDetails.strInstructionsFR ? (
				<p>(Français non disponible) {cocktailDetails.strInstructions}</p>
			) : (
				<p>{cocktailDetails.strInstructionsFR}</p>
			)}
			<h3>INFORMATIONS</h3>
			<ul>
				<li>Type de Verre : {cocktailDetails.strGlass}</li>

				{!cocktailDetails.strIBA ? (
					""
				) : (
					<li>
						<abbr title="International Bartenders Association : Classement du cocktail selon sa popularité">
							IBA
						</abbr>{" "}
						: {cocktailDetails.strIBA}
					</li>
				)}
				{!cocktailDetails.strTags ? (
					""
				) : (
					<li>
						<ul>
							{cocktailDetails.strTags
								.split(",")
								.filter((tags) => !excludeTags.includes(tags))
								.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
						</ul>
					</li>
				)}
			</ul>
		</article>
	);
}

export default CocktailDetails;
