import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import BackButton from "../../components/Button/BackButton";
import Footer from "../../components/Footer/Footer";
import styles from "./Collection.module.css";

function Collection() {
  const products = [
    {
      id: 1,
      image: "/img/card1.png",
      title: "Stellar Steps Heels",
      price: "$390",
    },
    { 
      id: 2, 
      image: "/img/card2.png", 
      title: "Emerald Blazer", 
      price: "$550",
     },
    { 
      id: 3, 
      image: "/img/card3.png", 
      title: "Allure Mask Hat", 
      price: "$90",
     },
    {
      id: 4,
      image: "/img/card4.png",
      title: "Crimson Gloss Heels",
      price: "$350",
    },
  ];

  return (
    <>
      <Header />
      <Banner imageSrc="/img/banner3.png" altText="Colection Banner" />
      <section className={styles.collectionSectionn}>
        <h1>CHECK OUT OUR NEW COLLECTION "PURE"</h1>
        <p className={styles.collectionP}>
          The "Pure" collection embodies the essence of minimalism and refined
          simplicity. Clean lines, natural textures, and muted tones create
          elegant silhouettes that highlight the true beauty of every detail.
          This is clothing that speaks of purity in style and impeccable taste.
        </p>
        <br />
        <div className={styles.productGalleryy}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCardd}>
              <img src={product.image} alt={product.title} />
              <div>
                <h3 className={styles.productInfooP}>{product.title}</h3>
                <p className={styles.productInfooP}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BackButton />
      <Footer />
    </>
  );
}

export default Collection;
