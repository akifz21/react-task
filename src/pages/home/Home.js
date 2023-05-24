import React from 'react'
import HomePageHeader from '../../components/HomePageHeader'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'

export default function Home() {
    return (
        <>
            <HomePageHeader />
            <HomeSection />
            <AboutSection />
        </>
    )
}
