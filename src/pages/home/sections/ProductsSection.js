import { useContext, useEffect } from 'react'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import ProductContext from '../../../context/ProductContext'
import { Link } from 'react-router-dom'


export default function ProductsSection() {
    const { handleNextPage, handlePrevPage, visibleData, setItemsPerPage } = useContext(ProductContext)
    useEffect(() => {
        setItemsPerPage(8)
    }, [])
    return (
        <div id='products' className='h-screen flex flex-col px-32 py-20  items-center'>
            <h1 className='text-home-text top-32 text-5xl font-bold'>Products</h1>
            <Categories />
            <div className='flex flex-row items-center  gap-5 justify-around'>
                <button onClick={handlePrevPage}>Prev</button>
                <div className="grid mt-20 grid-cols-4 gap-20 w-full">
                    {
                        visibleData.map((product) => (
                            <Link key={product.id} to={`/product/${product.id}`}><ProductCard title={product.title} price={product.price} image={product.thumbnail} /></Link>
                        ))
                    }
                </div>
                <button onClick={handleNextPage}>Next</button>
            </div>


        </div>
    )
}
