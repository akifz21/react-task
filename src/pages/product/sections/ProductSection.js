import { ReactComponent as LefArrow } from '../../../assets/svgs/li_arrow-left.svg'
import { ReactComponent as RightArrow } from '../../../assets/svgs/li_arrow-right.svg'
import { ReactComponent as Star } from '../../../assets/svgs/Star4.svg'
import { ReactComponent as EmptyStar } from '../../../assets/svgs/Star5.svg'
import { ReactComponent as CheckMark } from '../../../assets/svgs/check-mark.svg'
import groupImage from '../../../assets/images/Group-image.png'
import ProductCategory from '../components/ProductCategory'
import { useContext } from 'react'
import CartContext from '../../../context/CartContext'

export default function ProductSection({ product, productImages }) {

    const { addToCart, removeFromCart, products, handleBuy } = useContext(CartContext)

    return (
        <div className='h-screen flex flex-col gap-10 px-32'>
            <ProductCategory />
            <div className='flex flex-row gap-20'>
                <div className='flex flex-col mb-10 gap-10 w-2/5'>
                    <div className='h-[50vh] flex items-center justify-center p-10 rounded-lg bg-blue-100'>
                        <img className='h-3/4' src={product.thumbnail} alt='' />
                    </div>
                    <div className='flex flex-row gap-5 justify-center'>
                        <button className='bg-blue-100 h-10 self-center p-2 rounded-full'>
                            <LefArrow />
                        </button>
                        {
                            productImages.slice(0, 3).map((image, index) => (
                                <div key={index} className='h-36 w-36 flex justify-center items-center bg-blue-100 rounded-lg'>
                                    <img src={image} alt='' />
                                </div>
                            ))
                        }

                        <button className='bg-blue-100 h-10 self-center  p-2 rounded-full'>
                            <RightArrow />
                        </button>
                    </div>
                </div>
                <div className='w-3/5 flex flex-col'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row gap-10'>
                            <h1 className='text-3xl font-semibold '>{product.title}</h1>
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
                            ${product.price}
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
                            <button onClick={() => handleBuy()} className='bg-blue-700 p-3 rounded-lg font-bold text-white w-1/2'>Buy it now</button>
                            {
                                products.includes(product)
                                    ?
                                    <button onClick={() => removeFromCart(product)} className='bg-red-200 p-3 rounded-lg font-bold text-red-700 w-1/2'>
                                        Remove From Cart
                                    </button>
                                    :
                                    <button onClick={() => addToCart(product)} className='bg-blue-200 p-3 rounded-lg font-bold text-blue-700 w-1/2'>
                                        Add To Cart
                                    </button>
                            }
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
