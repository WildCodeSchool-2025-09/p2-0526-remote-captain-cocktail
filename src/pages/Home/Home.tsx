import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import styles from "./Home.module.scss";

function Home() {
	return (
		<section className={`${styles.home} home`}>
			<img
				src="../../assets/images/logotransp.png"
				alt="Captain Cocktail's logo"
				className={styles.logo}
			/>
			<p className={styles.presentation}>
				A cocktail catalog right at your fingertips, tailored to what you
				already have at home.
			</p>
			<article className={styles["glass-morphed"]}>
				<Icon name="readytoshake" />
				<h2>Ready to shake ?</h2>
				<p>
					Add your ingredients and find your next favorite cocktail in seconds.
				</p>
				<button
					type="button"
					className={`${styles["add-ingredients"]} pink-button`}
				>
					<Link to="/bar">Add ingredients</Link>
				</button>
				<p className={styles["fast-free"]}>
					It's fast, free, and requires no registration.
				</p>
			</article>
			<article className={styles.moment}>
				{/* TODO : Ajouter le composant CocktailTrending à l'intérieur de l'article */}
			</article>
			<article className={styles["all-cocktails"]}>
				<h3>All cocktails</h3>
				<p>Browse our complete collection for inspiration.</p>
				<button type="button" className={styles["browse-all"]}>
					<Link to="/cocktails">
						Browse cocktails <Icon name="arrowright" />
					</Link>
				</button>
			</article>
			<article className={styles["cocktail-favorites"]}>
				<div className={styles.favorites}>
					<h2>Recents favorites</h2>
					<Link to="/favorites">See all &rsaquo;</Link>
				</div>
			</article>
		</section>
	);
}

export default Home;
