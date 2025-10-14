import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import BackButton from "../../components/Button/BackButton";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <Header />
      <Banner imageSrc="/img/banner2.png" altText="About Banner" />
      <main>
        <h1 className={styles.h1}>ABOUT US</h1>

        <section className={styles.aboutContainer}>
          <div className={styles.aboutLeft}>
            <p>
              Valrin is a Ukrainian fashion house founded in 1997 by talented
              designers Val and Rina. Our vision is to combine elegance and
              innovation, creating clothing that emphasizes the individuality of
              every woman.
            </p>
            <p>
              In September 1998, we presented our first women’s clothing
              collection, New Era, which became a symbol of a new approach to
              fashion. With its unique design and attention to detail, this
              collection made a real revolution in the fashion world, focusing
              on the freedom of self-expression.
            </p>
            <p>
              Over the years, Valrin has expanded its range to offer not only
              clothing but also perfumes and stylish accessories. Each of our
              products is created using high-quality materials and in accordance
              with sustainable development principles. We believe that elegance
              can and should be eco-friendly.
            </p>
            <p>
              Through participation in international fashion shows and
              exhibitions, Valrin has become a recognized brand not only in
              Ukraine but also beyond its borders. We proudly represent
              Ukrainian fashion on the world stage, preserving our traditions
              while incorporating new technologies into our production.
            </p>
            <p>
              Join us on a journey to elegance and luxury with Valrin. Our
              mission is to help you feel confident and unique in every outfit.
            </p>
          </div>

          <div className={styles.aboutRight}>
            <img src="/img/about1.png" alt="Valrin fashion 1" />
            <img src="/img/about2.png" alt="Valrin fashion 2" />
            <img src="/img/about3.png" alt="Valrin fashion 3" />
          </div>
        </section>
      </main>
      <BackButton />
      <Footer />
    </>
  );
}

export default About;
