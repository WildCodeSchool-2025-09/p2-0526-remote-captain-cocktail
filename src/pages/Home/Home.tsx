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
				<h2>COCKTAIL OF THE MOMENT</h2>
				<div className={styles["cocktail-moment"]}>
					display world cup cocktail and things <br />
					because we're worthit <br />
					and VOILA <br />
					test <br />
					test <br />
					test
				</div>
			</article>
			<article className={styles["all-cocktails"]}>
				<h3>All cocktails</h3>
				<p>test</p>
				<button type="button" className="pink-button">
					<Link to="/cocktails">Browse</Link>
				</button>
			</article>
			<article> nbRealisable </article>
			<article>
				<h2>Realisables maintenant</h2>
				<div className={styles["cocktail-realisable"]}>
					display some things really beautifull <br />
					because we're worthit <br />
					and VOILA <br />
					test <br />
					test <br />
					test
				</div>
			</article>
			<article>
				<h2>Suggestions for you</h2>
				<div className={styles["cocktail-suggests"]}>
					display some things really beautifull you can do <br />
					because we're worthit <br />
					and VOILA <br />
					test <br />
					test <br />
					test
				</div>
			</article>
			<article>
				<h2>Recents favorites</h2>
				<Link to="/favorites">See all</Link>
				<div className={styles["cocktail-favorites"]}>
					display some things really beautifull you liked
					<br />
					because we're worthit <br />
					and VOILA <br />
					test <br />
					test <br />
					test
				</div>
			</article>
		</section>
	);
}

export default Home;
