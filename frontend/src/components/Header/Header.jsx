import { Link, useNavigate } from "react-router-dom"; 
import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext"; 
import { useCart } from "../../context/CartContext";

function Header() {
  const { currentUser, logout } = useAuth(); 
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate('/login'); 
    } catch (error) {
      console.error("Помилка виходу:", error);
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); //стискає весь масив до одного значення

  return (
    <header className={styles.header}>
      <div className={styles.logo}>VALRIN</div>
      <div className={styles.navIcons}>
        <Link to="/">HOME</Link>

        {currentUser ? (
          <a href="#" onClick={handleLogout} className={styles.logOut}>
            LOG OUT
          </a>
        ) : (
          <Link to="/login">LOG IN</Link>
        )}
        
        <Link to="/about">ABOUT</Link>

        {currentUser && (
            <Link to="/cart"> 
                CART ({totalItems})
            </Link>
        )}
        
      </div>
    </header>
  );
}

export default Header;