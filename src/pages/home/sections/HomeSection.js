import React from 'react'
import SearchBar from '../components/SearchBar'
import homeImage from '../../../assets/images/Image.png'
import { ReactComponent as Arrow } from '../../../assets/svgs/Arrow.svg'

export default function HomeSection() {
    return (
        <div>
            <div id='home' className='flex flex-col min-h-screen text-center gap-14  items-center justify-center'>
                <div className='relative text-6xl md:text-8xl w-3/4 font-bold text-home-text'>
                    Amazing furniture for  your home
                    <Arrow className='absolute -right-5 top-16' />
                </div>
                <p className='w-1/2 text-xl text-slate-500 '>
                    We think the chair is the most important piece of furniture in your home. Because if you love the chair you are sitting in chances are you will love the rest of the room.
                </p>
                <SearchBar />
            </div>
            <div className='h-screen'>
                <img src={homeImage} className='w-full h-full' alt="" />
            </div>
        </div>
    )
}
