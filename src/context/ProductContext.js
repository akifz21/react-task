import { createContext, useState, useEffect } from "react";


const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8)

    useEffect(() => {
        const storedData = localStorage.getItem('products');
        if (storedData) {
            setProducts(JSON.parse(storedData));
        }

        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(apiData => {
                setProducts(apiData.products);
                localStorage.setItem('products', JSON.stringify(apiData.products));
            });
    }, []);



    const totalPage = products.length / itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = products.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(prevPage => prevPage + 1);
        }

    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }

    };

    const values = {
        handleNextPage,
        handlePrevPage,
        visibleData,
        setItemsPerPage
    }

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}

export default ProductContext