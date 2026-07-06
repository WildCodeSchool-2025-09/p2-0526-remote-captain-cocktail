import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./Pagination.module.scss";

interface Props {
	totalPages: number;
	onPageChange: (page: number) => void;
}

function Pagination({ totalPages, onPageChange }: Props) {
	const [pagination, setPagination] = useState(1);
	const NB_PAGES = 5;
	let startPage = Math.max(1, pagination - Math.floor(NB_PAGES / 2));
	let endPage = startPage + NB_PAGES - 1;
	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - NB_PAGES + 1);
	}

	const handlePage = (page: number) => {
		setPagination(page);
		onPageChange(page);
	};

	return (
		<section className={styles.pagination}>
			<button
				type="button"
				onClick={() => handlePage(1)}
				disabled={pagination === 1}
			>
				<Icon name="fullleft" className={styles["icon-arrow"]} />
			</button>
			<button
				type="button"
				onClick={() => handlePage(pagination - 1)}
				disabled={pagination === 1}
			>
				<Icon name="left" className={styles["icon-arrow"]} />
			</button>

			{Array.from(
				{ length: endPage - startPage + 1 },
				(_, i) => startPage + i,
			).map((page) => (
				<button
					key={page}
					type="button"
					onClick={() => handlePage(page)}
					className={pagination === page ? styles.active : ""}
				>
					{page}
				</button>
			))}

			<button
				type="button"
				onClick={() => handlePage(pagination + 1)}
				disabled={pagination === totalPages}
			>
				<Icon name="right" className={styles["icon-arrow"]} />
			</button>
			<button
				type="button"
				onClick={() => handlePage(totalPages)}
				disabled={pagination === totalPages}
			>
				<Icon name="fullright" className={styles["icon-arrow"]} />
			</button>
		</section>
	);
}

export default Pagination;
