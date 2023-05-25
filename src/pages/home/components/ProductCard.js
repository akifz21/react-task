import React from 'react'
import { ReactComponent as ArrowRight } from "../../../assets/svgs/arrow-right.svg"

export default function ProductCard({ title, price, image }) {
    return (
        <div>
            <div className="relative flex flex-col justify-around px-5 bg-product h-56 w-56">
                <img className='absolute w-1/2 max-h-20 -top-10 self-center' src={image} alt="" />
                <h3 className='text-home-text relative top-14 font-bold text-xl'>{title}</h3>
                <div className='flex flex-row justify-between'>
                    <p>${price}</p>
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}
