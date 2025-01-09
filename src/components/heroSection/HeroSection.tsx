import Image from "next/image"

const HeroSection = () => {
    return (
        <div>

            {/* image */}
            <div className="xl:my-12">

                <div className="relative m-aut">

                    <div className="flex items-center justify-between">

                        <div>
                            <div className="w-[130px] md:w-60 mt-2 left-44 md:left-[450px] lg:w-[330px] lg:h-[80px] lg:top-5 lg:left-[670px] xl:w-[577px] xl:h-[130px] xl:top-[40px] xl:left-[850px] absolute">
                                <h1 className="font-Integral font-bold text-base md:text-3xl lg:text-4xl md:leading-10 xl:text-[64px] xl:leading-[64px] uppercase">only the best offer online</h1>
                            </div>

                            <div className="hidden md:block md:w-[280px] md:h-[125px] md:top-[100px] md:left-[450px] lg:w-80 lg:left-[670px] lg:mt-4 xl:w-[500px] xl:h-[150px] xl:top-[170px] xl:left-[850px] absolute">
                                <h1 className="font-figtree font-normal text-xs md:leading-4 xl:text-base xl:leading-[22px] text-justify">Discover a wide range of products at unbeatable prices! From the latest fashion trends to must-have gadgets, our ecommerce store offers something for everyone. Enjoy a seamless shopping experience, fast delivery, and excellent customer service, all from the comfort of your home. Start shopping today and get exclusive deals that you won&opos;t find anywhere else!</h1>
                            </div>

                            {/* Button */}
                            <div className="absolute py-4 w-20 md:w-28 h-8 top-20 left-52 lg:w-[120px] lg:h-5 md:top-[230px] md:left-[530px] lg:mt-4 lg:ml-48 xl:w-[180px] xl:h-[52px] xl:top-[330px] xl:left-[850px] rounded-[62px] bg-black flex justify-center items-center">
                                <h1 className="font-figtree font-medium text-sm xl:text-base xl:leading-[21.6px] text-white text-center">Shop Now</h1>
                            </div>

                            <div className="md:w-[768px] md:h-[400px] lg:w-[1024px] lg:h-[450px] xl:w-[1440px] xl:h-[650px] xl:top-[134px] xl:left-[100px]">
                                <Image src={"/onlineShopping.jpg"} alt="front" width={1440} height={663} className="md:w-[768px] lg:w-[1024px] md:h-[400px] lg:h-[450px] xl:w-[1440px] xl:h-[650px] object-contain md:object-fill "></Image>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default HeroSection
