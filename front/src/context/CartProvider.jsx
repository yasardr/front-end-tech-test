import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    let recoveryCart = JSON.parse(localStorage.getItem('cart'));
    if (!recoveryCart) {
        recoveryCart = [];
    }
    console.log(recoveryCart);

    const [cart, setCart] = useState(recoveryCart);
    const [count, setCount] = useState(0);

    const addProduct = (id) => {
        const res = cart.filter(product => product.id === id);
        if (res.length > 0) {
            const products = cart.map(product => {
                if (product.id === id) {
                    return { id: product.id, amount: product.amount + 1 }
                }
                return product;
            });
            setCart(products);
        } else {
            setCart([...cart, { id, amount: 1 } ]);
        }
        setCount(count + 1);
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const removeProduct = (id) => {
        const res = cart.filter(product => product.id === id);
        if (res.length > 0) {
            let products = [];
            if (res[0].amount > 1) {
                products = cart.map(product => {
                    if (product.id === id) {
                        return { id: product.id, amount: product.amount - 1 }
                    }
                    return product;
                });
            } else {
                products = cart.filter(product => product.id !== id);
            }
            setCart(products);
            setCount(count - 1);
        }
    }

    return (
        <CartContext.Provider value={{ count, cart, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}
