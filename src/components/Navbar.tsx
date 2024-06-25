import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
            <Link href={"/"}>
                Home
            </Link>

            <Link href={"menu"}>
                Menu
            </Link>

            <Link href={"blog"}> 
                Blog 
            </Link>

            <Link href={"stuff"}> 
                Stuff 1 
            </Link>
            
            <Link href={"stuff2"}> 
                Struff 2 
            </Link>
        </nav>
    )
}

export default Navbar;