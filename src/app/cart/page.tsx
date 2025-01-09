"use client"
import CartItems from "@/components/cart/CartItems"
import OrderSummary from "@/components/cart/OrderSummary"


const Cart = () => {
  return (

    <div className="mt-10 lg:mt-16 xl:mt-20 font-serif px-2 md:px-20 lg:px-32 xl:px-32 m-auto">
         <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline text-center">
                {/* Home */}
                <h1 className="font-serif font-bold text-[32px] lg:text-[40px] leading-[38.4px] lg:leading-[48px]">Your Cart</h1>
            </div>

            <div className="xl:flex  justify-center gap-8 md:gap-10 xl:py-12">
            <CartItems/>
             <OrderSummary/>
            </div>

    </div>
  )
}

export default Cart
