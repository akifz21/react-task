import React from 'react'
import HomePageHeader from '../../components/HomePageHeader'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'
import ProductsSection from './sections/ProductsSection'

export default function Home() {
    return (
        <>
            <HomePageHeader />
            <HomeSection />
            <AboutSection />
            <ProductsSection />
        </>
    )
}
