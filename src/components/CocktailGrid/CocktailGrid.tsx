import type { Cocktails } from "../../types/types";
import CocktailCard from "../CocktailCard/CocktailCard";
import styles from "./CocktailGrid.module.scss";

interface Props {
	cocktails: Cocktails[];
}

function CocktailGrid({ cocktails }: Props) {
	return (
		<section className={styles.grid}>
			{cocktails.map((cocktail) => (
				<CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
			))}
		</section>
	);
}

export default CocktailGrid;
