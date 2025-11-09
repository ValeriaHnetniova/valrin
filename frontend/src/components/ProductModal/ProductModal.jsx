import styles from './ProductModal.module.css';
import { useCart } from '../../context/CartContext'; 

function ProductModal({ product, onClose }) {
    const { addItem } = useCart(); 

    const handleAddToCart = () => {
        addItem(product); 
        onClose();        
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                
                <div className={styles.productDetails}>
                    <img src={product.image} alt={product.title} className={styles.productImage} />
                    <div className={styles.productInfo}>
                        <h2>{product.title}</h2>
                        <p className={styles.price}>{product.price}</p>
                        <button className={styles.addToCartButton} onClick={handleAddToCart}>
                            Додати в кошик
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductModal;