import React from 'react'

export default function AboutItem({ number, title, description }) {
    return (
        <div>
            <div className="bg-white h-40  flex flex-col justify-start gap-3">
                <h1 className='text-5xl text-orange-600 font-bold'>{number}</h1>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <p className='text-slate-400'>{description}</p>
            </div>
        </div>
    )
}
