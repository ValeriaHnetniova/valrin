import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer({ noMargin }) {
  return (
    <footer
      className={`${styles.footer} ${noMargin ? styles.footerLogin : ""}`}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <p className={styles.footerTitle}>Help</p>
          <div>
            <Link to="/about">About Us</Link>
            <br />
            <br />
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
        <div className={styles.footerSection}>
          <a
            href="https://instagram.com"
            className={styles.footerA}
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>
        </div>
        <div className={styles.footerSection}>
          <Link to="/login" className={styles.footerA}>
            Register/ Sign in
          </Link>
        </div>
        <div className={styles.footerLogo}>
          <p>VALRIN</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;