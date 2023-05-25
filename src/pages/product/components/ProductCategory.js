import { Link } from 'react-router-dom'
import { ReactComponent as LefArrow } from '../../../assets/svgs/li_arrow-left.svg'
export default function ProductCategory() {
    return (
        <div>
            <div className='flex gap-2 items-center border-b  border-slate-300 pb-2 mt-32 flex-row'>
                <Link to={"/"}>
                    <button className='bg-blue-100 p-2 rounded-full'>
                        <LefArrow />
                    </button>
                </Link>
                <h1 className=' text-xl'>Back to previous page | Listed in category: </h1>
                <p className='text-blue-600 text-xl'> Cell Phones & Accessorie</p>
                <p className='ml-5 text-blue-600 text-xl'>  Cell Phones & Smartphones</p>
            </div>
        </div>
    )
}
