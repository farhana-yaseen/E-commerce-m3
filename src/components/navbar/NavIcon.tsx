"use client"


import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react"
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link"
import { AddToCartType, useCart } from "../../app/ContextProvider";






const NavIcon = () => {
    const { data: session } = useSession()
    const { addToCart } = useCart();  // Access the cart context to add the product to the cart
    

    const handleAddToCart = (cartItem:AddToCartType) => {
        addToCart(cartItem); // Add the current item to the cart
      };
    
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">

            {/* Login/Registration */}
            {!session && (
                <div onClick={() => signIn()} className="flex flex-col justify-center items-center cursor-pointer">
                    <VscAccount className="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                    <p className="text-xs xl:text-sm">Login/Register</p>
                </div>
            )
            }


            {/* Cart */}
            <Link href={"/cart"}>
            <div className="flex flex-col justify-center items-center">
                <AiOutlineShoppingCart onClick={()=>handleAddToCart} className="text-xl lg:text-3xl xl:text-4xl" />
                <p className="text-xs xl:text-sm">Cart</p>
            </div>
            </Link>

            {/* Logout */}
            {
                session && (
                    <div onClick={() => signOut()} className="flex flex-col justify-center items-center cursor-pointer">
                       <FaSignOutAlt className="text-lg lg:text-xl xl:text-3xl" />
                        <p className="text-xs xl:text-sm">Logout</p>
                    </div>
                )
            }


        </div>
    )
}
export default NavIcon