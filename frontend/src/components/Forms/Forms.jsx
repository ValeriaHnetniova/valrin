import { Link } from "react-router-dom";
import styles from "./Forms.module.css";

function Forms({
  type = "login",
  title = "LOG IN",
  buttonText = "LOG IN",
  linkText = "REGISTER",
  linkPath = "/register",
  imageSrc = "/img/login.png",
}) {
  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <h1 className={styles.loginTitle}>{title}</h1>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="email"
              className={styles.formInput}
              placeholder="E-mail"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Password"
            />
          </div>

          {type === "register" && (
            <>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="First Name"
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Last Name"
                />
              </div>
            </>
          )}

          <button type="submit" className={styles.loginButton}>
            {buttonText}
          </button>
          <br />

          <div className={styles.registerLinkContainer}>
            <Link to={linkPath} className={styles.registerLink}>
              {linkText}
            </Link>
          </div>
        </form>
      </div>

      <div className={styles.loginRight}>
        <img src={imageSrc} alt={title} />
      </div>
    </section>
  );
}

export default Forms;
