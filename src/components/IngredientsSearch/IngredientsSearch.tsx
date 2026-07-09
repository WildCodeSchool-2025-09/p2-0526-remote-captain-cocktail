import Icon from "../Icon/Icon";
import styles from "./IngredientsSearch.module.scss";

import t from "../../data/en_EN.json";

export default function IngredientsSearch({
	search,
	setSearch,
}: {
	search: string;
	setSearch: (value: string) => void;
}) {
	return (
		<div className={styles.search}>
			<div>
				<Icon name="search" className={styles.search} />
				<input
					type="text"
					placeholder={t.bar.search.select}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				{search && (
					<button
						type="button"
						aria-label={t.bar.search.clear}
						onClick={() => setSearch("")}
					>
						<Icon name="cross" className={styles.cross} />
					</button>
				)}
			</div>
		</div>
	);
}
