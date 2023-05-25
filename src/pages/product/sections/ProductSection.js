import { ReactComponent as LefArrow } from '../../../assets/svgs/li_arrow-left.svg'
import { ReactComponent as RightArrow } from '../../../assets/svgs/li_arrow-right.svg'
import { ReactComponent as Star } from '../../../assets/svgs/Star4.svg'
import { ReactComponent as EmptyStar } from '../../../assets/svgs/Star5.svg'
import { ReactComponent as CheckMark } from '../../../assets/svgs/check-mark.svg'
import image from '../../../assets/images/Image.png'
import groupImage from '../../../assets/images/Group-image.png'
import ProductCategory from '../components/ProductCategory'

export default function ProductSection() {
    return (
        <div className='h-screen flex flex-col gap-10 px-32'>
            <ProductCategory />
            <div className='flex flex-row gap-20'>
                <div className='flex flex-col mb-10 gap-10 w-2/5'>
                    <div className='h-[50vh] p-10 rounded-lg bg-blue-100'>
                        <img src={image} alt="" />
                    </div>
                    <div className='flex flex-row gap-5 justify-center'>
                        <button className='bg-blue-100 h-10 self-center p-2 rounded-full'>
                            <LefArrow />
                        </button>
                        <div className='h-36 w-36 bg-blue-100 rounded-lg'>
                            s
                        </div>
                        <div className='h-36 w-36 bg-blue-100 rounded-lg'>
                            s
                        </div>
                        <div className='h-36 w-36 bg-blue-100 rounded-lg'>
                            s
                        </div>
                        <button className='bg-blue-100 h-10 self-center  p-2 rounded-full'>
                            <RightArrow />
                        </button>
                    </div>
                </div>
                <div className='w-3/5 flex flex-col'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row gap-10'>
                            <h1 className='text-5xl font-semibold '>Title</h1>
                            <span className='bg-blue-100 px-7 py-3 rounded-lg font-semibold text-blue-700 inline'>
                                Starlight
                            </span>
                        </div>
                        <p className='text-slate-400'>
                            Free 2 Days Shipping | 1 Year Warranty
                        </p>
                        <div className='flex flex-row  gap-3'>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <EmptyStar />
                            <p className='text-slate-400'>from 392 Reviews</p>
                        </div>
                        <div className='font-bold text-3xl'>
                            $300
                        </div>
                        <div>
                            <ul className='flex flex-col gap-3 text-xl'>
                                <li>
                                    <CheckMark className='inline' /> Free return
                                </li>
                                <li>
                                    <CheckMark className='inline' /> Chat with us 24 hours
                                </li>
                                <li>
                                    <CheckMark className='inline' /> Comes with a Package
                                </li>

                            </ul>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <img src={groupImage} alt="" />
                            <p className='text-blue-700 text-xl font-semibold'>1,241 Sold in the last 24 hours</p>
                        </div>
                        <div className='flex flex-row gap-10 items-center'>
                            <button className='bg-blue-700 p-3 rounded-lg font-bold text-white w-1/2'>Buy it now</button>
                            <button className='bg-blue-200 p-3 rounded-lg font-bold text-blue-700 w-1/2'>Add To Cart</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
