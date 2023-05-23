import React from 'react'
import HomePageHeader from '../components/HomePageHeader'
import { ReactComponent as Arrow } from '../assets/svgs/Arrow.svg'

export default function Home() {
    return (
        <>
            <HomePageHeader />
            <div id='home' className='flex flex-col h-screen text-center gap-10 bg-background items-center justify-center'>
                <div className='relative text-8xl w-3/4 font-bold text-home-text'>
                    Amazing furniture for  your home
                    <Arrow className='absolute -right-5 top-16' />
                </div>
                <p className='w-1/2 text-lg text-slate-500 '>
                    We think the chair is the most important piece of furniture in your home. Because if you love the chair you are sitting in chances are you will love the rest of the room.
                </p>
            </div>
            <div>

            </div>

        </>
    )
}
