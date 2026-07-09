import Icon from "../../Icon/Icon";
import styles from "./CloseButton.module.scss";

function CloseButton() {
	return (
		<button
			type="button"
			commandfor="my-dialog"
			command="close"
			className={`${styles["arrow-left-button"]} ${styles["pink-button"]}`}
			aria-label="Close"
		>
			<Icon name="arrowleft" />
		</button>
	);
}

export default CloseButton;
