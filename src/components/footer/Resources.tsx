import Link from "next/link"

const Resources = () => {
  return (
    <div className="w-[112px] h-[146px] top-[4121px] left-[196px] gap-1 lg:w-[149px] lg:h-[177px] lg:gap-[20px] flex flex-col">
         <h1 className="w-[107px] h-[18px] lg:w-[118px] lg:h-[18px] text-figtree font-medium text-sm lg:text-base leading-[18px] tracking-[3px]">Links</h1>
        
        <div className="w-[159px] h-[112px] lg:w-[149px] lg:h-[133px] text-figtree font-normal text-sm lg:text-base leading-4 lg:leading-[19px] opacity-60 flex flex-col justify-start gap-3">
        
                <Link href={"/"} >Home</Link>
                <Link href={"/"} >Shop</Link> 
                <Link href={"/about"} >About</Link>
                <Link href={"/contact"} >Contact</Link>
        </div>
    </div>
  )
}

export default Resources
