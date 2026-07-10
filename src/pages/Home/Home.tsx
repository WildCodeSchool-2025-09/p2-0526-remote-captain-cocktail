import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import styles from "./Home.module.scss";

function Home() {
	return (
		<section className={styles.home}>
			<img
				src="../../assets/images/logotransp.png"
				alt="Captain Cocktail's logo"
				className={styles.logo}
			/>
			<p>
				A cocktail catalog right at your fingertips, tailored to what you
				already have at home.
			</p>
			<article>
				<Icon name="readytoshake" />
				<h2>Prêt à shaker ?</h2>
				<p>
					Add your ingredients and find your next favorite cocktail in seconds.
				</p>
				<button type="button" className="pink-button">
					Add Ingredients
				</button>
				<p>It's fast, free, and requires no registration.</p>
			</article>
			<article>
				<h2>Cocktail of the moment</h2>
				<div>test</div>
			</article>
			<article>
				<h3>All cocktails</h3>
				<p>test</p>
				<button type="button" className="pink-button">
					<Link to="/cocktails">Browse</Link>
				</button>
			</article>
			<article> nbRealisable</article>
			<article>Realisables maintenant</article>
			<article>suggestions = un cocktail random parmi les réalisables</article>
			<article>
				<h2>Recents favorites</h2>
				<Link to="/favorites">See all</Link>
			</article>
		</section>
	);
}

export default Home;
