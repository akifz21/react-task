import React from 'react'
import { ReactComponent as LogoSvg } from '../assets/svgs/Logo.svg'

export default function HomePageHeader() {

    const links = [
        {
            path: "",
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
        <div className='fixed z-50 flex bg-white w-full flex-row h-20 justify-around items-center shadow-lg'>
            <div>
                <LogoSvg />
            </div>
            <ul className='flex flex-row gap-5'>
                {
                    links.map((link) => (
                        <a href={"#" + link.path}>{link.name}</a>
                    ))
                }
            </ul>
            <div className='flex flex-row gap-5 h-1/2 items-center'>
                <button>Contact</button>
                <button className='bg-orange-600 p-2 px-5 text-white'>Buy Online</button>
            </div>
        </div >
    )
}
