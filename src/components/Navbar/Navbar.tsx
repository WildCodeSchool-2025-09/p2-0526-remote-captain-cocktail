import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Navbar.module.scss";

function Navbar() {
	return (
		<nav className={styles["nav-main"]} aria-label="Main navigation">
			<ul className={styles["nav-list"]}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles["nav-link-active"] : styles["nav-link"]
						}
					>
						<Icon name="house" className={styles["nav-icon"]} />
						<span className={styles["nav-label"]}>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/cocktails"
						className={({ isActive }) =>
							isActive ? styles["nav-link-active"] : styles["nav-link"]
						}
					>
						<Icon name="martini" className={styles["nav-icon"]} />
						<span className={styles["nav-label"]}>Cocktails</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/bar"
						className={({ isActive }) =>
							isActive ? styles["nav-link-active"] : styles["nav-link"]
						}
					>
						<Icon
							name="bottle-wine"
							className={`${styles["nav-icon"]} ${styles["nav-icon-bottle"]}`}
						/>
						<span className={styles["nav-label"]}>Bar</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/favorites"
						className={({ isActive }) =>
							isActive ? styles["nav-link-active"] : styles["nav-link"]
						}
					>
						<Icon name="star" className={styles["nav-icon"]} />
						<span className={styles["nav-label"]}>Favorites</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
