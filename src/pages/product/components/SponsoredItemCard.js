import { ReactComponent as Star } from '../../../assets/svgs/Star4.svg'
export default function SponsoredItemCard() {
    return (
        <div>
            <div className='flex flex-col p-3 gap-3 h-64 w-56 shadow-2xl rounded-xl'>
                <div className='h-1/2 p-3 flex items-center justify-center bg-blue-100 rounded-xl'>
                    s
                </div>
                <div>
                    <h3 className='font-semibold text-2xl'>Title</h3>
                    <p className='text-slate-500 font-semibold'>Brand</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-3xl font-bold'>
                        $100
                    </div>
                    <div className='flex gap-3 items-center flex-row font-bold'>
                        <Star />4.3
                    </div>
                </div>
            </div>
        </div>
    )
}
