import Link from "next/link";
import Logo from "./Logo";

function Nav() {
    return (
        <div className={`sticky top-0 z-50 bg-stone-50 lg:bg-transparent lg:static w-full`}>
            <div className="flex justify-between items-center py-4 gap-5 lg:px-0">
                <Logo />
                <div className="flex flex-row gap-5 text-sm">
                    <Link href="/services" passHref>
                        <div className="cursor-pointer hover:text-stone-500">SERVICES</div>
                    </Link>
                    <Link href="/store" passHref>
                        <div className="cursor-pointer hover:text-stone-500">STORE</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;