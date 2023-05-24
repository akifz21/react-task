import { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'


export default function ProductsSection() {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json.products))
    }, [])


    const itemsPerPage = 8
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

    return (
        <div id='products' className='h-screen flex flex-col px-32 py-20 items-center'>
            <h1 className='text-home-text top-32 text-5xl font-bold'>Products</h1>
            <Categories />
            <div className='flex flex-row items-center  gap-5 justify-around'>
                <button onClick={handlePrevPage}>Prev</button>
                <div class="grid mt-20 grid-cols-4 gap-20 w-full">
                    {
                        visibleData.map((product) => (
                            <ProductCard title={product.title} price={product.price} image={product.thumbnail} />
                        ))
                    }
                </div>
                <button onClick={handleNextPage}>Next</button>
            </div>


        </div>
    )
}
