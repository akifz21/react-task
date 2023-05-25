import { ReactComponent as Logo } from "../assets/svgs/Frame.svg"
import { ReactComponent as UpdownArrow } from "../assets/svgs/li_chevron-down.svg"
import { ReactComponent as SearchIcon } from "../assets/svgs/li_search.svg"
import { ReactComponent as WishList } from "../assets/svgs/Group1.svg"
import { ReactComponent as Cart } from "../assets/svgs/li_shopping-cart.svg"
import { ReactComponent as GridIcon } from "../assets/svgs/li_layout-grid.svg"
import profile from '../assets/images/Ellipse2.png'
import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

export default function ProductPageHeader() {
    const { products, totalPrice } = useContext(CartContext)
    return (
        <div className='flex flex-row fixed bg-white items-center justify-around h-20 px-32 shadow-xl rounded-b-3xl w-full '>
            <div>
                <Logo />
            </div>
            <div className="flex flex-row bg-search  rounded-md">
                <div className="flex flex-row p-3">
                    <span className="font-semibold flex flex-row items-center gap-2 px-2 border-spacing-80 border-r border-slate-500">
                        All Categories <UpdownArrow />
                    </span>
                    <input type="text" className="bg-search px-2" placeholder="Search for items..." />
                </div>
                <span className="bg-blue-700 text-center p-3 rounded-r-md">
                    <SearchIcon className="self-center" />
                </span>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <span className="flex flex-row items-center">
                    <WishList />
                    <p>Wishlist</p>
                </span>
                <Link to={"/cart"}>

                    <span className="flex  flex-row items-center gap-3">
                        <div className="relative">
                            <div className="absolute bg-blue-700 h-4 text-xs w-4 -top-2 -right-2 text-center  text-white rounded-full">{products.length}</div>
                            <Cart />
                        </div>
                        <span>
                            <p className="font-semibold">My cart</p>
                            <p className="text-blue-700 font-bold">${totalPrice}</p>
                        </span>
                    </span>
                </Link>
                <img src={profile} alt="" />
                <UpdownArrow />
            </div>
            <button className="flex flex-row items-center gap-3 bg-blue-700 text-center text-white p-3 font-semibold rounded-md">
                <GridIcon /> Browse All Categories
            </button>
        </div>
    )
}
