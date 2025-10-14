import styles from "./BackButton.module.css";

function BackButton() {
  return (
    <input
      type="button"
      value="back"
      onClick={() => window.history.back()}
      className={styles.buttonBack}
    />
  );
}

export default BackButton;
