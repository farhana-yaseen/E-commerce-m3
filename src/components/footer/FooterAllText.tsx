import Company from "./Company"
import FAQ from "./FAQ"
import Help from "./Help"
import Resources from "./Resources"
import TextWithLogos from "./TextWithLogos"



const FooterAllText = () => {
  return (
    <div className="w-[280px] md:w-[700px] lg:w-[950px] xl:w-[1240px] xl:top-[4011px] mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-between items-center my-3 md:my-5 md:gap-6 lg:gap-[35px] gap-1">
        {/* Shop.com */}
        <div className="flex-grow ">
            <TextWithLogos/>
        </div>
        
        {/* company */}
        <div className="w-1/2 lg:flex-1">
            <Company/>
        </div>
        {/* help */}
        <div className="w-1.2 lg:flex-1">
            <Help/>
        </div>
        {/* FAQ */}
        <div className="flex-1">
            <FAQ/>
        </div>
        {/* Resources */}
        <div className="flex-1">
            <Resources/>
        </div>
        </div>
    



</div>
  )
}

export default FooterAllText
