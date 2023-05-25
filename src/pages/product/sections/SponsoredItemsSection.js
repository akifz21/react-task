import SponsoredItemCard from "../components/SponsoredItemCard";


export default function SponsoredItemsSection() {
    return (
        <div className='flex flex-col gap-10 px-32 h-[50vh]'>
            <h1 className='text-3xl font-bold'>Smiliar sponsored items</h1>
            <div className='flex flex-row gap-5'>


                <SponsoredItemCard />
                <SponsoredItemCard />
                <SponsoredItemCard />
                <SponsoredItemCard />
                <SponsoredItemCard />
            </div>
        </div>
    )
}
