import React from 'react'
import AboutItem from '../components/AboutItem'
import image1 from '../../../assets/images/landing-image-1.png'
import image2 from '../../../assets/images/landing-image-2.png'
import image3 from '../../../assets/images/landing-image-3.png'
import image4 from '../../../assets/images/landing-image-4.png'


export default function AboutSection() {

    const items = [
        {
            num: "1",
            title: "Mission",
            descripton: "It makes people at ease and feel like they want to open up."
        },
        {
            num: "2",
            title: "Motivation",
            descripton: "The perfect mix of art that complements the room's style."
        },
        {
            num: "3",
            title: "Vision",
            descripton: "Along with a healthy dose of negative space to give the eyes spots to rest."
        },
        {
            num: "4",
            title: "Goal",
            descripton: "Art that has meaning to the people who live in the space,"
        },
    ]

    return (
        <div id='about' className='h-screen flex flex-row md:px-12 xl:px-32 pt-20 '>
            <div className='w-1/2 flex flex-col'>
                <div className='w-3/4 flex flex-col gap-5'>
                    <h1 className='font-bold text-7xl text-home-text'>About us</h1>
                    <p className='text-slate-500'>Comfort is key and how you feel about your chair will affect how you feel and your mood.</p>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-16'>
                    {
                        items.map(item => (
                            <AboutItem key={item.num} number={item.num} description={item.descripton} title={item.title} />
                        ))
                    }
                </div>
            </div>
            <div className='w-1/2'>
                <div className='relative top-20 flex flex-row gap-5'>
                    <div className='grid absolute top-12 grid-cols-1 gap-5'>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                    <div className='grid absolute right-10 gap-5 grid-cols-1'>
                        <img src={image4} alt="" />
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
