import Link from "next/link";

function Logo() {
    return (
        <Link href="/" passHref>
            <div className="text-2xl md:text-4xl flex flex-col cursor-pointer">
                <div className="font-light tracking-tighter">NICE HAIR</div>
                <div className="font-semibold border-l-4 border-stone-900 pl-2">SALON</div>
            </div>
        </Link>

    );
}

export default Logo;