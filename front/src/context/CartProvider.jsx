import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    let recoveryCart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart'))  : [];
    let recoveryCount = JSON.parse(localStorage.getItem('count')) ? JSON.parse(localStorage.getItem('count')) : 0;

    if (recoveryCart.length === 0) {
        localStorage.setItem('cart', JSON.stringify(recoveryCart));
        console.log({recoveryCart});
    }

    if (recoveryCount === 0) {
        localStorage.setItem('count', JSON.stringify(recoveryCount));
        console.log({recoveryCount});
    }

    const [cart, setCart] = useState(recoveryCart);
    const [count, setCount] = useState(recoveryCount);

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
            localStorage.setItem('cart', JSON.stringify(products));
        } else {
            setCart([...cart, { id, amount: 1 } ]);
            localStorage.setItem('cart', JSON.stringify([...cart, { id, amount: 1 } ]));
        }
        setCount(count + 1);
        localStorage.setItem('count', count + 1);
        return 'Item added successfully';
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
            localStorage.setItem('cart', JSON.stringify(products));
            localStorage.setItem('count', count - 1);
            return 'Item removed successfully';
        } else {
            return 'There is nothing to remove';
        }
    }

    return (
        <CartContext.Provider value={{ count, cart, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}
