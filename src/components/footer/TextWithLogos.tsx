
import { CiYoutube } from "react-icons/ci"
import {FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa"

const TextWithLogos = () => {
  return (
    <div className="w-[280px] md:w-[200px] lg:w-[250px] xl:w-[330px] xl:h-[177px]">
        {/* Text */}
        <div className="xl:w-[248px] xl:h-[114px] flex flex-col justify-start gap-6 lg:gap-[25px]">  
            <h1 className="w-[144px] h-5 top-[3804.58px] left-4 lg:w-[167px] lg:h-[23px] font-fjalla font-bold text-[28.85px] lg:text-[33.45px] leading-[34.62px] lg:leading-[40.15px]">Fkm</h1>
            <h1 className="w-[280px] h-10 top-[3838.58px] left-[17px] md:w-[200px] lg:w-[255px] xl:w-[270px] xl:h-[66px] font-figtree font-normal text-sm lg:text-base xl:text-lg leading-[22px] opacity-60">We have clothes that suits your style and which you’re proud to wear. From women to men.</h1>
        </div>

        {/* Logos */}
        <div className="w-[148px] h-7 flex justify-center items-center gap-2 lg:gap-3 mt-8 lg:mt-10 xl:mt-8"> 
            {/* Social */}

            <div className="w-7 h-7 top-[3898.58px] left-[56px] lg:top-[149px]  flex justify-center items-center">
                {/* Facebook */}
                <FaFacebookF className="text-white text-xl lg:text-2xl cursor-pointer bg-[#3b5998] rounded-md"/>
            </div>
            

            <div className="w-7 h-7 top-[3898.58px] left-[96px] lg:top-[149px] lg:left-[80px] bg-white flex justify-center items-center">
                {/* Insta */}
                <FaInstagram   className="text-white text-xl lg:text-2xl cursor-pointer bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-md"/>
            </div>


            <div className="w-7 h-7 top-[3898.58px] left-[136px] lg:top-[149px] lg:left-[120px] bg-white flex justify-center items-center">
                {/* github */}
                <FaGithub className="text-xl lg:text-2xl cursor-pointer"/>
            </div>

            <div className="w-7 h-7 top-[3898.58px] left-[136px] lg:top-[149px] lg:left-[120px] bg-white flex justify-center items-center ">
                {/* github */}
                <CiYoutube className="text-xl lg:text-2xl cursor-pointer bg-[#FF0000] rounded-md text-white"/>
            </div>
           
        </div>
     
    </div>
  )
}

export default TextWithLogos
