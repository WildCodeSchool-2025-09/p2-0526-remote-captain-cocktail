import IngredientsDropdown from "../../components/IngredientsDropdown/IngredientsDropdown";
import IngredientsSearch from "../../components/IngredientsSearch/IngredientsDropdown";
import MyIngredients from "../../components/MyIngredients/MyIngredients";
import MySuggestions from "../../components/MySuggestions/MySuggestions";

import styles from "./Bar.module.scss";

import t from "../../data/fr_FR.json";

function Bar() {
	return (
		<div className={styles["bar-page"]}>
			<IngredientsSearch />
			<div className="how-to">
				<h3>{t.bar.howTo.title}</h3>
				<ul>
					{t.bar.howTo.steps.map((step, i) => (
						<li key={step.id}>
							<span>{i + 1}</span>
							<div>
								<span>{step.line1}</span>
								<span>{step.line2}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div>
				<IngredientsDropdown />
				<MyIngredients />
				<MySuggestions />
			</div>
		</div>
	);
}

export default Bar;
