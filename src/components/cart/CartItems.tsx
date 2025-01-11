"use client"
import { useCart } from "@/app/ContextProvider"
import Image from "next/image"
import Link from "next/link"
import { RiDeleteBin6Fill } from "react-icons/ri"



const CartItems = () => {

  const { cart, increaseQuantity, decreaseQuantity, clearCart, removeFromCart } = useCart();


  if (cart.length == 0) {
    return (
      <div className="mx-3 my-6 text-sm lg:text-base xl:text-lg">
        Your cart is empty. <Link href="/" className="font-bold italic cursor-pointer">Go shopping</Link>
      </div>
    );
  }

  return (
    <div>

      <div className="w-[300px] md:w-[530px] lg:w-[700px] h-full ml-1 lg:ml-8 rounded-[20px] border-opacity-10 p-1 lg:p-3.5 px-1 lg:px-6">

        <div className=" p-3 mx-1 my-10 lg:p-5 lg:my-0 xl:p-8 border-[1px] rounded-lg flex flex-col justify-center items-center gap-5 lg:gap-8">
          <div className="w-[260px] md:w-[480px] md:h-6 xl:w-[600px] xl:h-12 lg:w-[600px] lg:h-12 flex justify-center gap-2 md:gap-4 xl:gap-x-8 items-center rounded-md xl:rounded-lg font-serif font-bold border-[1px] text-[8px] md:text-xs lg:text-sm bg-slate-100">
            <h1>Product Image</h1>
            <h1>Product Title</h1>
            <h1>Product Price</h1>
            <h1>Product Quantity</h1>
          </div>

          {/* Clear All */}
          <div onClick={clearCart} className="w-16 h-5 lg:w-20 lg:h-7 ml-auto  bg-red-600 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            <h1 className="text-white font-bold text-[10px] lg:text-xs">Clear All</h1>
          </div>


          {cart.map(itemInCart => (

            <div key={itemInCart.id} className="w-[270px] h-16 md:w-[480px] md:h-20 lg:w-[530px] xl:w-[600px] xl:h-24 flex justify-center md:justify-between items-center gap-1 lg:gap-4 border-[1px] px-1 lg:px-6 rounded-lg">
              {/* Image */}
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-16 flex justify-center items-center md:gap-4">
                <Image
                  src={itemInCart.image}
                  alt={itemInCart.title}
                  width={200}
                  height={200}
                  className="w-7 h-7 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" />
              </div>

              <div className="w-60 h-14 md:w-96 lg:w-[550px] lg:h-20 flex items-center justify-center gap-2 md:gap-8 lg:gap-5">
                {/* Cart Tiltle */}
                <h1 className="w-20 md:w-52 lg:w-48 text-[10px] text-xs md:text-sm font-bol">{itemInCart.title}</h1>

                {/* Cart Price */}
                <div className="w-12 h-4 md:w-16 md:h-4 lg:w-20 lg:h-[27px]">
                  {/* Price */}
                  <h1 className="font-figtree font-bold text-[10px] lg:text-sm">Rs.{itemInCart.price}</h1>
                </div>

                {/*  Cart Quantity */}
                <div className="w-14 md:w-20 lg:w-28 flex flex-col items-center border-[1px]">
                  <span className="font-bold text-[10px] lg:text-base">Quantity</span>

                  <div className="w-12 lg:w-28 flex justify-center items-center gap-1 lg:gap-4">
                    {/* decrease Cart Quantity */}
                    <button onClick={() => decreaseQuantity(itemInCart.id)} className="w-3 md:w-4 h-3 md:h-4 lg:w-5 lg:h-5 font-bold cursor-pointer text-xs lg:text-base xl:text:lg border-[1px] flex justify-center items-center">-</button>

                    <span className="font-bold text-xs lg:text-base xl:text:lg">{itemInCart.quantity}</span>
                    {/* Increase Cart Quantity */}
                    <button onClick={() => increaseQuantity(itemInCart.id)} className="w-3 md:w-4 h-3 md:h-4 lg:w-5 lg:h-5 font-bold cursor-pointer text-xs lg:text-base xl:text:lg border-[1px] flex justify-center items-center">+</button>
                  </div>
                </div>

              {/* Delete Icon */}
                <div onClick={()=>removeFromCart(itemInCart.id)} className="text-orange-700 cursor-pointer">
                <RiDeleteBin6Fill />

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}


export default CartItems
