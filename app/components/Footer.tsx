import { data } from '@/app/metadata'
import Gallery from './Gallery';

function Footer() {
    return (
        <div className="flex flex-col gap-12 mt-8 mb-28 items-center lg:mt-24">
            <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tracking-tight border-2 px-5 py-3 border-stone-900 text-xs hover:bg-stone-900 hover:text-white transition-colors duration-250 lg:text-sm">FOLLOW SALON ON FACEBOOK</a>
            <Gallery />
            <div className="font-bold text-sm flex flex-col gap-1 items-center md:flex-row md:gap-3">
                <div>{data.title}</div>
                <div>{data.location}</div>
                <div className='hover:text-stone-500'><a href={data.tel}>{data.phoneNumber}</a></div>
            </div>
        </div>
    );
}

export default Footer;
