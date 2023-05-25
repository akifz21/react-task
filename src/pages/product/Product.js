import React from 'react'
import { useParams } from 'react-router-dom'
import ProductPageHeader from '../../components/ProductPageHeader'
import ProductSection from './sections/ProductSection'
import DescriptionSection from './sections/DescriptionSection'
import SponsoredItemsSection from './sections/SponsoredItemsSection'

export default function Product() {
    const { id } = useParams()
    return (
        <>
            <ProductPageHeader />
            <ProductSection />
            <DescriptionSection />
            <SponsoredItemsSection />
        </>
    )
}
