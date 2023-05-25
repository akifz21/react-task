import { createContext, useState, useEffect } from "react";

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json.products))
    }, [])

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