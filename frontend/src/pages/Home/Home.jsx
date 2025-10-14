import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Banner imageSrc="/img/banner.png" altText="Home Banner" />
      <Slider />
      <main>
        <section className={styles.aboutUs}>
          <h1>ABOUT US</h1>
          <p>
            Valrin is a Ukrainian fashion house founded in 1997 by talented
            designers Val and Rina. Our <br />
            is to combine elegance and innovation, creating clothing that
            emphasizes the <br />
            individuality of every woman
          </p>

          <Link to="/about" className={styles.viewAll1}>
            view all
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
