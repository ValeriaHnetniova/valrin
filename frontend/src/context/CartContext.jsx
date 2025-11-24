import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext'; 
import { db } from '../Firebase'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const [cartItems, setCartItems] = useState([]); 
    const [loading, setLoading] = useState(true);

    const fetchCart = async (userId) => {
        setLoading(true);
        const cartRef = doc(db, "carts", userId);
        const docSnap = await getDoc(cartRef);

        if (docSnap.exists()) {
            setCartItems(docSnap.data().items || []);
        } else {
            await setDoc(cartRef, { items: [] });
            setCartItems([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (currentUser) {
            fetchCart(currentUser.uid);
        } else {
            setCartItems([]);
            setLoading(false);
        }
    }, [currentUser]); //дивиться за currentUser

    const updateCartInFirestore = async (newItems) => {
        if (!currentUser) return;
        const cartRef = doc(db, "carts", currentUser.uid);
        try {
            await setDoc(cartRef, { items: newItems }); 
        } catch (error) {
            console.error("Помилка оновлення кошика: ", error);
        }
    };

    const addItem = (product) => {
        if (!currentUser) {
            alert("Будь ласка, увійдіть, щоб додати товари");
            return;
        }

        let newItems;
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            newItems = cartItems.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            newItems = [...cartItems, { ...product, quantity: 1 }];
        }
        
        setCartItems(newItems);
        updateCartInFirestore(newItems);
    };

    const removeItem = (productId) => {
        const newItems = cartItems.filter(item => item.id !== productId);
        
        setCartItems(newItems);
        updateCartInFirestore(newItems); 
    };


    const value = {
        cartItems,
        addItem,
        removeItem,
        loading
    };

    return (
        <CartContext.Provider value={value}>
            {!loading && children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};