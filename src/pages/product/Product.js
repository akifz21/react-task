import ProductPageHeader from '../../components/ProductPageHeader'
import ProductSection from './sections/ProductSection'
import DescriptionSection from './sections/DescriptionSection'
import SponsoredItemsSection from './sections/SponsoredItemsSection'
import ProductPageFooter from '../../components/ProductPageFooter'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [productImages, setProductImages] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setProductImages(data.images)
            })

    }, [id])

    return (
        <>
            <ProductPageHeader />
            <ProductSection product={product} productImages={productImages} />
            <DescriptionSection image={product.thumbnail} />
            <SponsoredItemsSection />
            <ProductPageFooter />
        </>
    )
}
