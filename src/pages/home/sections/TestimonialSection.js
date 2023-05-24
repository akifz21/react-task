import image from '../../../assets/images/Image2.png'
import { ReactComponent as Quote } from '../../../assets/svgs/quote-up.svg'
import { ReactComponent as LeftArrow } from '../../../assets/svgs/arrow-circle-left.svg'
import { ReactComponent as RightArrow } from '../../../assets/svgs/arrow-circle-right.svg'

export default function TestimonialSection() {
    return (
        <div id='testimonial' className='h-screen flex flex-col justify-around gap-14 text-white bg-home-text mt-24 px-32 '>
            <div className=''>
                <h1 className='text-7xl mt-20 font-bold'>What do customers say...</h1>
            </div>
            <div className='flex flex-row px-32'>
                <div className='w-1/2'>
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col gap-10 w-1/2'>
                    <div>
                        <Quote />
                        <h1 className='text-4xl font-bold'>Amazing Service</h1>
                    </div>
                    <p className='opacity-80'>Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers.</p>
                    <div>
                        <h3 className='font-bold text-2xl text-orange-500'>Wade Warren</h3>
                        <p>Doctor</p>
                    </div>
                    <div className='flex flex-row self-end'>
                        <LeftArrow />
                        <RightArrow />
                    </div>

                </div>
            </div>
        </div>
    )
}
