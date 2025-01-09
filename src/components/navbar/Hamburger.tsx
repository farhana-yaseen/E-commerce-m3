"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Search from "./Search"
import NavIcon from "./NavIcon"

const Hamburger = () => {

    const [openMenu, setOpenMenu] = useState(false)


    return (
        <div className="">
            
                <Image src="/hamburger.png" alt="hamburger menu" width={40} height={40} onClick={() => setOpenMenu(previous => (!previous))} className="cursor-pointer" />


                {openMenu && (
                <>
                    {/* Overlay background */}
                    <div 
                        className="fixed inset-0 bg-black opacity-80 z-40" 
                        onClick={() => setOpenMenu(false)} 
                    />
                    
                    {/* Fullscreen Menu                                                                                            The absolute inset-0 ensures that the menu takes up the entire screen */}
                    <div className="flex flex-col justify-items-center mt-32 items-center gap-4 text-white font-serif text-lg font-bold z-50 absolute inset-0 bg-black">
                        <Link href="/" onClick={() => setOpenMenu(false)} className="hover:text-gray-300">Home</Link>
                        <Link href="/shop" onClick={() => setOpenMenu(false)} className="hover:text-gray-300">Shop</Link>
                        <Link href="/about" onClick={() => setOpenMenu(false)} className="hover:text-gray-300">About</Link>
                        <Link href="/contact" onClick={() => setOpenMenu(false)} className="hover:text-gray-300">Contact</Link>
                    <Search/>
                    <NavIcon/>
                    </div>
                </>
            )}

            
                                                                                                                                                                                                        {/* if previous state false it become true if ture covert false */}
        </div>
    )
}
export default Hamburger