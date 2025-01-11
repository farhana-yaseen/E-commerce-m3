

import { getData } from "@/Api";
import { Items } from "@/app/ContextProvider";
import getStarsFromRating from "@/components/productList/Rating";
import Image from "next/image"
import Link from "next/link"
import { LuShoppingBasket } from "react-icons/lu";





const ProductItems = async () => {

    const productOfferList = await getData(); // Fetch product data



    // Filter products based on the selected category
    const productItems = productOfferList.data.map((id: Items) => id.id)



    return (
        <div className="w-full h-full flex flex-col justify-center items-center md:flex-row flex-wrap gap-5 lg:gap-8 xl:gap-12 bg-orange-100">


            {/* Heading */}
            <div className="bg-cover bg-no-repeat w-full"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1530053969600-caed2596d242")'
                }}
            >
                <h1 className="py-5 lg:py-10 font-black text-2xl md:text-4xl lg:text-6xl xl:text-7xl bg-white mix-blend-lighten uppercase text-center">Shop Now </h1>
            </div>


            {
                productItems.map((productId: number) => {
                    const items = productOfferList.data.find((p: Items) => p.id === productId)
                    return <div key={items.id}>
                        <div className="w-56 h-[230px] md:h-[235px] lg:w-60 lg:h-64 xl:w-64 xl:h-[285px] shadow-lg xl:shadow-xl 2xl:shadow-2xl bg-white font-serif rounded-md  hover:scale-110 transition-all duration-200 ease-out">

                            <div className="transform group ">
                                <Link href={`/product/${items.id}`} className="cursor-pointer ">
                                    {/* Image */}
                                    <div className="flex justify-center items-center">
                                        <Image src={items.image} alt="product.title" width={200} height={200} className="w-32 h-32 xl:w-40 xl:h-40 object-contain"></Image>
                                    </div>

                                    {/* Title */}
                                    <div className="text-[10px] lg:text-xs font-bold mx-2 lg:mx-3">
                                        <h1 className="">{items.title}</h1>
                                    </div>

                                    {/* Price */}
                                    <div className="text-xs font-bold mx-2 lg:mx-3">
                                        <h1>Rs. {items.price}</h1>
                                    </div>

                                    {/* Rating */}
                                    <div className="text-[10px] lg:text-xs font-bold mx-2 lg:mx-3 flex justify-between">
                                        <h1 className="flex justify-center items-center gap-1">Rating: {getStarsFromRating(items.rating.rate)}</h1>
                                        <h1>Quantity: {items.rating.count}</h1>
                                    </div>

                                </Link>

                                <Link href={"/"}>
                                    <div className="w-20 h-4 bg-red-600 rounded-lg flex items-center justify-center gap-2 ml-2 mt-2">
                                        <LuShoppingBasket className=" object-contain cursor-pointer text-white" />
                                        <h1 className="text-white font-bold text-[10px]">Shop Now</h1>
                                    </div>
                                </Link>

                               
                            
                            </div>
                        </div>
                    </div>
                })
            }



        </div>
    )
}


export default ProductItems

