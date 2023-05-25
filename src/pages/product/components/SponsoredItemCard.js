import { ReactComponent as Star } from '../../../assets/svgs/Star4.svg'
export default function SponsoredItemCard({ image, brand, title, price, rating }) {
    return (
        <div>
            <div className='flex flex-col p-3 gap-3 h-72 w-56 shadow-2xl rounded-xl'>
                <div className='h-1/2 p-3 flex items-center justify-center bg-blue-100 rounded-xl'>
                    <img className='h-3/4' src={image} alt="" />
                </div>
                <div>

                </div>
                <div className='h-1/4'>
                    <h3 className='font-semibold w-full text-lg'>{title}</h3>
                    <p className='text-slate-500 font-semibold'>{brand}</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-md font-bold'>
                        ${price}
                    </div>
                    <div className='flex gap-3 items-center flex-row font-bold'>
                        <Star />{rating}
                    </div>
                </div>

            </div>
        </div>
    )
}
