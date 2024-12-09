import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })
    const [count, setCount] = useState(cart.length)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        setCount(cart.length)
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (product) => {
        const index = cart.findIndex(item => item.id === product.id)
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(index, 1)
            setCart(updatedCart);
        }
    }

    const calculateTotal = () => {
       const total = cart.reduce((acc, item) => acc + item.price, 0);
       return total.toFixed(2)
    }

    return (
        <CartContext.Provider value={{cart, count, addToCart, removeFromCart, calculateTotal}}>{children}</CartContext.Provider>
    )
}
