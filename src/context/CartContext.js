import { createContext, useEffect, useState } from "react";


const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            setProducts(parsedData);

            const priceSum = parsedData.reduce((sum, product) => sum + product.price, 0);
            setTotalPrice(priceSum);
        }
    }, []);

    const addToCart = (product) => {
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setTotalPrice(prev => prev + product.price)
    }


    const removeFromCart = (product) => {
        const updatedProducts = products.filter((item) => item !== product);
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setTotalPrice(prev => prev - product.price)
    }

    const handleBuy = () => {
        alert("Successfully")
    }

    const handleDownload = () => {
        const data = JSON.parse(localStorage.getItem("cart"));
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';
        link.click();

        URL.revokeObjectURL(url);
    };


    const values = {
        products,
        addToCart,
        removeFromCart,
        totalPrice,
        handleBuy,
        handleDownload
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export default CartContext

