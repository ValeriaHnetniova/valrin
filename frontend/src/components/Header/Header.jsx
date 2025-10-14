import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>VALRIN</div>
      <div className={styles.navIcons}>
        <Link to="/">HOME</Link>
        <Link to="/login">LOG IN</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </header>
  );
}

export default Header;
