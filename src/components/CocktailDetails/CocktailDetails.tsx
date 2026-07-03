import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Cocktails } from "../../types/types";
import CocktailTags from "../CocktailTags/CocktailTags";
import Icon from "../Icon/Icon";
import IngredientItem from "../IngredientItem/IngredientItem";
import styles from "./CocktailDetails.module.scss";

function CocktailDetails() {
	const [fav, setFav] = useState(false);
	function handleFav() {
		setFav(!fav);
	}

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
				<Icon className={styles.exclamationpoint} name="exclamationpoint" />
				<h2>Cocktail introuvable</h2>
				<p>Une erreur est survenue. Vérifiez votre connexion et réessayez.</p>
				<button type="reset" onClick={fetchCocktail}>
					Réessayer
				</button>
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
			<h2>{cocktailDetails.strDrink}</h2>
			<ul className={styles["cocktail-tags"]}>
				<li className={styles.alcool}>
					{cocktailDetails.strAlcoholic === "Alcoholic"
						? "Alcoolisé"
						: cocktailDetails.strAlcoholic === "Non alcoholic"
							? "Sans alcool"
							: cocktailDetails.strAlcoholic === "Optionnal alcohol"
								? "Alcool optionnel"
								: ""}
				</li>
				<li>{cocktailDetails.strCategory}</li>
			</ul>
			<div className={styles["recipe-specs"]}>
				<p>🕙 10 min</p>
				<p>👩‍👦 1 pers.</p>
				<p>⭐ Facile</p>
			</div>
			<h3>INGREDIENTS</h3>
			<ul className={styles.ingredients}>
				{Array.from({ length: 15 }, (_, index) => index + 1).map((value) => (
					<IngredientItem
						key={value}
						strIngredient={cocktailDetails[`strIngredient${value}`]}
						strMeasure={cocktailDetails[`strMeasure${value}`]}
					/>
				))}
			</ul>
			<h3>PRÉPARATION</h3>
			<div className={styles.preparation}>
				{!cocktailDetails.strInstructionsFR ? (
					<p>(Français non disponible) {cocktailDetails.strInstructions}</p>
				) : (
					<p>{cocktailDetails.strInstructionsFR}</p>
				)}
			</div>
			<h3>INFORMATIONS</h3>
			<CocktailTags
				strIBA={cocktailDetails.strIBA}
				strGlass={cocktailDetails.strGlass}
				strTags={cocktailDetails.strTags}
			/>
		</article>
	);
}

export default CocktailDetails;
