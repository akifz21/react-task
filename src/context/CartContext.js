import { createContext, useState } from "react";


const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const addToCart = (product) => {
        setProducts([...products, product])
    }

    const values = {
        products,
        addToCart
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export default CartContext

