import { useContext } from "react"
import CartContext from "../../context/CartContext"

export default function Cart() {
    const { products, removeFromCart, handleBuy, handleDownload } = useContext(CartContext)
    return (
        <div className='flex gap-5 flex-col h-screen justify-center items-center'>
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="relative h-1/2 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-lg text-center text-gray-500 ">
                    <thead className="text-xl text-center text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => (
                                <tr key={i} className="bg-white border-b  hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                                        {product.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.price}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={() => removeFromCart(product)}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            <button onClick={() => handleBuy()} className='bg-blue-200 p-3 rounded-lg font-bold text-blue-700 w-1/2'>
                Buy
            </button>
            <button onClick={() => handleDownload()} className='bg-blue-200 p-3 rounded-lg font-bold text-blue-700 w-1/2'>
                Download json
            </button>
        </div>
    )
}
