import { ReactComponent as SearchIcon } from '../../../assets/svgs/search-normal.svg'
export default function SearchBar() {
    return (
        <form className='w-1/2 shadow-3xl h-20 absolute -bottom-7 z-10'>
            <div className='flex relative flex-row h-full items-center'>
                <input className='w-full h-full px-10' type="text" placeholder='Search' />
                <SearchIcon className='absolute right-5' />
            </div>
        </form>
    )
}
