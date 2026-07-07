import styles from "./IngredientsSearch.module.scss";

export default function IngredientsSearch({
	search,
	setSearch,
}: {
	search: string;
	setSearch: (value: string) => void;
}) {
	return (
		<div className={styles.search}>
			<input
				type="text"
				placeholder="Sélectionner un ingrédient"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
