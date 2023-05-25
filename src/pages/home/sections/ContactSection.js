import image5 from '../../../assets/images/landing-image-5.png'
import image6 from '../../../assets/images/landing-image-6.png'
import image7 from '../../../assets/images/landing-image-7.png'
import image8 from '../../../assets/images/landing-image-8.png'

export default function ContactSection() {
    return (
        <div id='contact' className="h-screen flex flex-row px-32">
            <div className="w-1/2">
                <div className='relative top-20 flex flex-row gap-5'>
                    <div className='grid absolute top-12 grid-cols-1 gap-5'>
                        <img src={image5} alt="" />
                        <img src={image8} alt="" />
                    </div>
                    <div className='grid absolute right-40  gap-5 grid-cols-1'>
                        <img src={image6} alt="" />
                        <img src={image7} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <div className='flex flex-col h-full gap-10 justify-center'>
                    <div>
                        <h1 className='text-home-text text-6xl font-bold'>Contact us</h1>
                        <p className='text-slate-500'>Our team would love to hear from you!</p>
                    </div>
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-row  gap-5'>
                            <input className='border w-full border-black p-3' placeholder='First name' type="text" />
                            <input className='border w-full border-black p-3' placeholder='Last name' type="text" />
                        </div>
                        <input className='border border-black p-3' placeholder='Email address' type="text" />
                        <textarea rows={10} className='border border-black p-3'>Message</textarea>
                        <button className='bg-orange-500 text-white text-center p-3'>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
