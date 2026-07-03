import styles from "./CocktailTags.module.scss";

const excludeTags = [
	"IBA",
	"Alcoholic",
	"Non alcoholic",
	"Optionnal alcohol",
	"ContemporaryClassic",
	"NewEra",
	"Unforgettables",
];

interface CocktailTagsProps {
	strGlass?: string;
	strIBA?: string;
	strTags?: string;
}

function CocktailTags({ strIBA, strGlass, strTags }: CocktailTagsProps) {
	return (
		<>
			<ul className={styles.info}>
				<li className={styles.glass}>
					<span className={styles.type}>Type de Verre</span>
					<span className={styles.property}>{strGlass}</span>
				</li>

				{!strIBA ? (
					""
				) : (
					<li>
						<abbr
							className={styles.type}
							title="International Bartenders Association : Classement du cocktail selon sa popularité"
						>
							IBA
						</abbr>{" "}
						<span className={styles.property}>{strIBA}</span>
					</li>
				)}

				{!strTags ? (
					""
				) : (
					<li className={styles.tagsBox}>
						<span className={`${styles.type} ${styles.typeTags}`}>Tags</span>
						<ul className={styles["tags-list"]}>
							{strTags
								.split(",")
								.filter((tags) => !excludeTags.includes(tags))
								.map((tag) => (
									<li key={tag} className={styles.tag}>
										{tag}
									</li>
								))}
						</ul>
					</li>
				)}
			</ul>
		</>
	);
}

export default CocktailTags;
