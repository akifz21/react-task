
export default function DescriptionSection({ image }) {
    return (
        <div className="flex flex-col gap-20 h-[75vh] py-20">
            <div className="flex flex-row gap-10 h-20 px-32 items-center bg-blue-50">
                <p className="font-bold border-b-4 borders border-blue-700">About</p>
                <p className="text-slate-500 font-bold">Shipping</p>
                <p className="text-slate-500 font-bold">Reviews</p>
                <p className="text-slate-500 font-bold">Returns</p>
            </div>
            <div className="flex flex-row gap-20 px-32">
                <div>
                    <div className='h-52 flex justify-center items-center w-52 bg-blue-100 rounded-lg'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div>
                    <ul className="list-disc">
                        <li>15 cm (6.1-inch) Super Retina XDR display</li>
                        <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
                        <li>Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</li>
                        <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingy</li>
                        <li>15 cm (6.1-inch) Super Retina XDR display</li>
                        <li>A15 Bionic chip for lightning-fast performance</li>
                        <li>Up to 19 hours of video playback</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
