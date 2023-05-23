import React from 'react'
import { ReactComponent as LogoSvg } from '../assets/svgs/Logo.svg'

export default function HomePageHeader() {

    const links = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "about",
            name: "About us"
        },
        {
            path: "products",
            name: "Products"
        },
        {
            path: "testimonial",
            name: "Testimonial"
        },

    ]

    return (
        <div className='fixed z-50 flex w-full flex-row h-24 justify-around items-center shadow-lg'>
            <div>
                <LogoSvg />
            </div>
            <ul className='flex flex-row gap-5'>
                {
                    links.map((link) => (
                        <a href="">{link.name}</a>
                    ))
                }
            </ul>
            <div className='flex flex-row gap-5 h-1/2 items-center'>
                <a href="">Contact</a>
                <button className='bg-orange-600 p-2 px-5 text-white'>Buy Online</button>
            </div>
        </div >
    )
}
