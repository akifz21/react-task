import { useContext, useEffect } from "react";
import SponsoredItemCard from "../components/SponsoredItemCard";
import ProductContext from "../../../context/ProductContext";
import { Link } from "react-router-dom";


export default function SponsoredItemsSection() {

    const { handleNextPage, handlePrevPage, visibleData, setItemsPerPage } = useContext(ProductContext)
    useEffect(() => {
        setItemsPerPage(5)
    })

    return (
        <div className='flex flex-col gap-10 px-32 h-[60vh]'>
            <h1 className='text-3xl font-bold'>Smiliar sponsored items</h1>
            <div className='flex flex-row gap-5'>
                {
                    visibleData.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <SponsoredItemCard image={product.thumbnail} title={product.title} price={product.price} brand={product.brand} rating={product.rating} />
                        </Link>
                    ))
                }
                <div>
                    <button onClick={handleNextPage}>Next</button>
                    <button onClick={handlePrevPage}>Prev</button>
                </div>
            </div>
        </div>
    )
}
