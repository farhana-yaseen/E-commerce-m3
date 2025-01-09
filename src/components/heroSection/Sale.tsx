import Image from "next/image"

const Sale = () => {
    return (
        <div className="w-100% bg-black">

            {/* Heading */}
            <div className="bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1530053969600-caed2596d242")'
                }}
            >
                <h1 className="my-8 md:py-5 lg:py-10 font-black text-2xl md:text-4xl lg:text-8xl xl:text-9xl bg-white mix-blend-lighten uppercase text-center">big Sale </h1>
            </div>



            {/* image */}
            <div className="my-6 xl:my-12 w-100%">
                <div className="w-full md:h-[400px] lg:w-[1024px] lg:h-[450px] xl:w-[1440px] xl:h-[650px] xl:top-[134px] xl:left-[100px]">
                    <Image src={"/sale.jpg"} alt="Sale" width={1440} height={663} className="md:w-[768px] lg:w-[1024px] md:h-[400px] lg:h-[450px] xl:w-[1440px] xl:h-[650px] object-contain md:object-fill "></Image>
                </div>

            </div>

        </div>
    )
}

export default Sale
