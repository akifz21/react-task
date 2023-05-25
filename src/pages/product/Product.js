import React from 'react'
import { useParams } from 'react-router-dom'
import ProductPageHeader from '../../components/ProductPageHeader'
import ProductSection from './sections/ProductSection'
import AboutSection from './sections/AboutSection'

export default function Product() {
    const { id } = useParams()
    return (
        <>
            <ProductPageHeader />
            <ProductSection />
            <AboutSection />
        </>
    )
}
