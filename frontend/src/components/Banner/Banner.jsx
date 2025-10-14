import styles from "./Banner.module.css";

function Banner({ imageSrc, altText }) {
  return (
    <section className={styles.banner}>
      <img src={imageSrc} alt={altText} />
    </section>
  );
}

export default Banner;
