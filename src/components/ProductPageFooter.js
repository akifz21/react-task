import { ReactComponent as Logo } from "../assets/svgs/Frame.svg"
import payment from '../assets/images/Payment.png'

export default function ProductPageFooter() {
    return (
        <div className='h-[70vh] border-y flex flex-col border-slate-300 p-32'>
            <div className="flex-row flex justify-between border-b pb-20 border-slate-300">
                <div>
                    <Logo />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold">Account</h1>
                    <ul className="flex flex-col text-slate-500 font-semibold gap-2">
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Track Order</li>
                        <li>Shipping Details</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold">Account</h1>
                    <ul className="flex flex-col text-slate-500 font-semibold gap-2">
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Track Order</li>
                        <li>Shipping Details</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold">Account</h1>
                    <ul className="flex flex-col text-slate-500 font-semibold gap-2">
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Track Order</li>
                        <li>Shipping Details</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row p-10 justify-between">
                <p>© 2022, All rights reserved</p>
                <img src={payment} alt="" />
            </div>
        </div>
    )
}
