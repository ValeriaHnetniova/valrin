import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';
import BackButton from '../../components/Button/BackButton';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cartItems, loading, removeItem } = useCart(); 

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    if (loading) {
        return <div>Завантаження кошика...</div>
    }

    return (
        <section className={styles.cartContainer}>
            <h1>Ваш кошик</h1>
            
            {cartItems.length === 0 ? (
                <>
                    <p>Ваш кошик порожній</p>
                    <Link to="/collection" className={styles.shopLink}>Перейти до колекції</Link>
                </>
            ) : (
                <div className={styles.cartWrapper}>
                    <div className={styles.cartItemsList}>
                        {cartItems.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.image} alt={item.title} className={styles.itemImage} />
                                <div className={styles.itemInfo}>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                    <div className={styles.itemActions}> 
                                        <button 
                                            className={styles.removeCrossButton} 
                                            onClick={() => removeItem(item.id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.itemQuantity}>
                                    <p>Кількість: {item.quantity}</p>
                                </div>
                                <div className={styles.itemPrice}>
                                    <p>Разом: {(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}$</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cartSummary}>
                        <h2>Разом:</h2>
                        <h3 className={styles.totalPrice}>{getTotalPrice().toFixed(2)}$</h3>
                        <p>Доставка буде розрахована на наступному кроці.</p>
                        <button className={styles.checkoutButton}>
                            Перейти до оплати
                        </button>
                    </div>
                </div>
            )}
            
            {cartItems.length > 0 && <BackButton />}
        </section>
    );
}

export default CartPage;