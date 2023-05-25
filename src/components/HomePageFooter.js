import { ReactComponent as LogoSvg } from '../assets/svgs/Logo.svg'

export default function HomePageFooter() {
    return (
        <div className='h-[40vh] relative bg-product flex flex-row px-32 items-center justify-around text-home-text'>
            <div>
                <LogoSvg />
                <p>4517 Washington Ave. <br /> Manchester, Kentucky <br /> 39495</p>
            </div>
            <div>
                <h3 className='font-bold'>Quick Links</h3>
                <ul>
                    <li>Gallery</li>
                    <li>About us</li>
                    <li>Buy online</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold'>Policy</h3>
                <ul>
                    <li>Terms & conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold'>Social</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIN</li>
                </ul>
            </div>
            <p className='absolute bottom-2'>Copyright ©2022 Zing Inc. All right reserved.</p>
        </div>
    )
}
