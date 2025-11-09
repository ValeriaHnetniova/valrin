import { useState } from 'react';
import Banner from "../../components/Banner/Banner";
import BackButton from "../../components/Button/BackButton";
import styles from "./Collection.module.css";
import { useGetCollection } from "../../hooks/useGetCollection";
import ProductModal from '../../components/ProductModal/ProductModal';

function Collection() {
  
  const { data: products, isLoading, isError, error } = useGetCollection();

  const [selectedProduct, setSelectedProduct] = useState(null);

  if(isLoading) return "ЗАВАНТАЖЕННЯ..."

  if (isError) return "ПОМИЛКА " + error.message

  return (
    <>
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
            <div key={product.id} className={styles.productCardd} onClick={() => setSelectedProduct(product)}>
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

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
}

export default Collection;
