"use client"
import Image from "next/image"



export default function AboutUs() {

    return (

        <div className="bg-black font-serif w-full h-full text-white my-5">


            <div className="md:w-[768px] md:h-[400px] lg:w-[1024px] lg:h-[450px] xl:w-[1440px] xl:h-[500px] xl:top-[134px] xl:left-[100px] ">
                <Image src={"/aboutus.png"} alt="front" width={1440} height={663} className="md:w-[768px] lg:w-[1024px] md:h-[400px] lg:h-[450px] xl:w-[1440px] xl:h-[500px] object-contain md:object-fill"></Image>
            </div>


            <div className="w-full lg:flex justify-between items-center p-5 md:p-8 lg:p-8 xl:p-16 bg-yellow-600">

                {/* Left content (Image) */}
                <div className="w-full lg:w-[35%] flex justify-center items-center bg-red-700 ">
                {/* Profile Picture*/}
                <Image src={"/about.png"} alt={"About"} width={300} height={300} className="mb-10 px-auto shadow-lg shadow-white w-52 h-44 md:w-96 md:h-52 lg:w-64 lg:h-60 xl:w-96 xl:h-80 rounded-md object-cover"></Image>
                </div>

                {/* Right content */}
                <div className="lg:w-[60%] px-8 md:px-12 lg:px-20 bg-blue-700">

                    <h1 className="bg-green-700 lg:p-2 2xl:p-3 text-2xl lg:text-4xl xl:text-5xl text-center font-bold rounded-md">About Us</h1>

                    <p className="text-justify text-sm lg:text-lg xl:text-2xl md:leading-relaxed xl:leading-loose py-5">Welcome to <strong className="text-green-700 italic">FKM Store</strong>, your one-stop destination for top-quality products and an exceptional shopping experience. We are passionate about offering a wide variety of carefully curated items that cater to your every need, whether you&apos;re looking for fashion, gadgets, home essentials, or unique gifts. Our mission is simple: to provide customers with unbeatable value, excellent customer service, and a seamless online shopping journey. With a focus on quality, affordability, and convenience, we strive to make every purchase an enjoyable experience. Thank you for choosing us. we&apos;re here to help you find exactly what you&apos;re looking for!</p>
                </div>
                                       


            </div>







        </div>


    )
}



