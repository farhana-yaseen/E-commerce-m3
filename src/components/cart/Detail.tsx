
// 'use client' is required to mark this file as a client component
'use client'

import { Items, useCart } from "@/app/ContextProvider";
import Image from "next/image"
import Link from "next/link"
import { LuShoppingBasket } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import getStarsFromRating from "../productList/Rating";


interface DetailProps {
    params: Items;
}

 const Detail = ({ params }: DetailProps) => {
 
  const { addToCart } = useCart();  // Access the cart context to add the product to the cart

  const handleAddToCart = () => {
    
    addToCart(params);  // Add item to the cart
    alert(`${params.title} has been added to your cart!`);
  };

  return (
    <div>

            <div className="mt-10 lg:mt-16 xl:mt-20 font-serif  px-8 md:px-20 lg:px-32 xl:px-32 ">

              <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline text-center">{params.title}</h1>
              <div className="p-3 my-10 lg:p-5 lg:my-16 xl:p-10 xl:my-20 border-[1px] ">

                <div className="md:flex justify-center items-start gap-10 lg:gap-16 xl:gap-32">
                  <div className=" flex items-center justify-center">
                    <Image src={params.image} alt="product.title" width={300} height={300} className="w-40 h-40 lg:w-60 lg:h-60 xl:w-96 xl:h-96 object-contain"></Image>
                  </div>


                  <div className="flex-1">

                    <div className="my-3 ">
                      <h1 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold underline italic">{params.title}</h1>
                    </div>

                    <div className="my-3">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-justify">{params.description}</p>
                    </div>

                    <div className="my-3 flex items-center gap-2">
                      <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-justify capitalize font-bold">Catagory:</h1>
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-justify capitalize">{params.category}</p>
                    </div>

                    <div className="my-3 font-bold text-sm md:text-lg lg:text-xl xl:text-2xl">
                      <h1>Rs.{params.price}</h1>
                    </div>

                    <div className="my-3 font-bold text-sm md:text-lg lg:text-xl xl:text-2xl flex justify-between">
                      <h1 className="flex justify-center items-center gap-1">Rating: {getStarsFromRating(params.rating.rate)}</h1>
                      <h1>Quantity: {params.rating.count}</h1>
                    </div>
                    
                    <div className="flex justify-around items-center  mt-8 lg:mt-12 xl:mt-16">
                    
                      <Link href={"/"}>
                      <div className="w-[100px] h-7 lg:w-32 lg:h-8 xl:w-44 xl:h-12 bg-red-600 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                        <LuShoppingBasket className=" object-contain text-white"/>
                        <h1 className="text-white font-bold text-xs lg:text-sm xl:text-base">Shop Now</h1>
                      </div>
                      </Link>

                     
                      <div onClick={handleAddToCart} className="w-[100px] h-7 lg:w-32 lg:h-8 xl:w-44 xl:h-12 bg-red-600 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                        <TiShoppingCart className=" object-contain text-white"/>
                        <h1 className="text-white font-bold text-xs lg:text-sm xl:text-base">Add to Cart</h1>
                      </div>                     

                    </div>
                  </div>
                </div>
              </div>

            </div>
    

    </div>
  );
};

export default Detail
