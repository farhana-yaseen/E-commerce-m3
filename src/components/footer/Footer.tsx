import LatestOffer from "./LatestOffer"
import FooterAllText from "./FooterAllText"
import PaymentLogo from "./PaymentLogo"


const Footer = () => {
  return (
    
    <div className="w-full xl:w-[1441px] xl:h-[589px] xl:top-[3781px] flex flex-col justify-end">
      <div className="flex flex-col justify-between">

        <div>
          <LatestOffer />
        </div>
        
        <div>
          {/* Rectangle */}
          <FooterAllText />

        </div>

        {/* line */}
        <div className="w-full top-[1610px] md:w-[680px] lg:w-[940px] xl:w-[1240px] xl:top-[1664px] border-[1px] border-opacity-10 mx-auto"></div>

        <div>
          {/* reserve */}
          <PaymentLogo />
        </div>

      </div>
    </div>
  )
}

export default Footer
