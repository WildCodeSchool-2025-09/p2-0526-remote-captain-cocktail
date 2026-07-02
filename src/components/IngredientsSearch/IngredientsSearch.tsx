import styles from "./IngredientsSearch.module.scss";

function IngredientsSearch({ search, setSearch }) {
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

export default IngredientsSearch;
