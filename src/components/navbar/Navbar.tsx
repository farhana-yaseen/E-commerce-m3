import Hamburger from "./Hamburger"
import SearchBar from "./Search"
import NavIcon from "./NavIcon"
import Link from "next/link"

const Navbar = ()=>{
    
    return(
        <div className="w-[100%] h-20 px-4 py-6 md:px-8 md:py-16 lg:px-12 lg:py-20 2xl:px-20 2xl:py-20 relative">
        {/* Mobile  */}
        <div className="flex justify-between items-center h-full md:hidden">
        <h1 className="font-extrabold italic font-serif text-xl  text-orange-700">FKM Store</h1>
        <Hamburger/>
        </div>

        {/* Other Screen */}
        <div className="hidden md:flex items-center justify-between h-full">

        <div className="w-[15%]">
            <h1 className="font-extrabold italic font-serif text-2xl lg:text-3xl xl:text-5xl text-orange-700">FKM Store</h1>
        </div>

        <div className="w-[35%] flex justify-start gap-3 lg:gap-5 xl:gap-8 items-center text-sm md:text-base lg:text-lg xl:text-xl font-bold">
                <Link href={"/"} >Home</Link>
                <Link href={"/"} >Shop</Link> 
                <Link href={"/about"} >About</Link>
                <Link href={"/contact"} >Contact</Link>
        </div>

        <div className="w-[50%] flex justify-between items-center gap-5">
            {/* Right Side */}
            <div className="flex-[2]">
            <SearchBar />
            </div>
                
            <div className="flex-1">
            <NavIcon/>
            </div>

        </div>
        </div>

            
        </div>
    )
}

export default Navbar