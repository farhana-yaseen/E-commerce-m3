
import HeroSection from "@/components/heroSection/HeroSection";
import Sale from "@/components/heroSection/Sale";
import ProductItems from "@/components/productList/ProductItems";






const FinalList = () =>{

    return(
       
        <div className="mt-10 xl:mt-16 w-full xl:max-[1440px]">
            <HeroSection/>
            <ProductItems/>
            <Sale/>
        </div>
    )

}; 
            
      
export default FinalList