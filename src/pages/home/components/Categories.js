import { useState, useEffect } from 'react'

export default function Categories() {

    const [categories, setCategories] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((json) => setCategories(json))
    }, [])

    const itemsPerPage = 6
    const totalPage = categories.length / itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = categories.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(prevPage => prevPage + 1);
        }

    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }

    };
    return (
        <div>
            <ul className='flex flex-row gap-4 mt-5 text-slate-500 text-lg font-semibold'>
                <li><button onClick={handlePrevPage}>Prev</button></li>
                <li className='text-orange-600'>All</li>
                {
                    visibleData.map((category, index) => (

                        <li key={index}><button>{category}</button></li>
                    ))
                }
                <li> <button onClick={handleNextPage}>Next</button></li>
            </ul>
        </div>
    )
}
