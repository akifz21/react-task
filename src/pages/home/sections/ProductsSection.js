import { useContext, useEffect, useState } from 'react'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import ProductContext from '../../../context/ProductContext'


export default function ProductsSection() {

    const { handleNextPage, handlePrevPage, visibleData } = useContext(ProductContext)
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
