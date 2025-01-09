
import { getData } from "@/Api";  // Your API function for fetching data
import Detail from "../../../components/cart/Detail"
import { notFound } from "next/navigation";
import { Items } from "@/app/ContextProvider";



// Server-side fetching
const ProductPage = async ({ params }: { params: { id: number } }) => {
  const itemDetail = await getData();  // Your function to fetch product details
  const items = itemDetail.data.find((i:Items) => i.id == params.id);

  if (!items) {
    notFound(); // This triggers the built-in 404 page

  }

  return (
    <div>
      {/* Render the Detail Component and pass product data */}
      
      <Detail params={items} />
    
    </div>
  );
};

export default ProductPage;

























// import { getData } from "@/Api"
// import { CartContext, CartProvider, useCart } from "@/components/cart/CartContext";
// import Image from "next/image"
// import Link from "next/link"
// import { useContext, useEffect, useState } from "react";

// export interface Items {
//   id: number;
//   category: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string
//   rating: Rating
// }
// interface Rating {
//   rate: number;
//   count: number;
// }



// const Detail = async ({ params }: { params: { id: number } }) => {
   
//   const [item, setItem] = useState<Items | null>(); // State to store fetched item
//   const { addToCart } = useCart(); // Hook to add item to cart

//   // Fetch item details on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const itemDetail = await getData(); // Fetch data
//         const fetchedItem = itemDetail.data.find((i: { id: number }) => i.id === params.id);
//         setItem(fetchedItem || null); // Store the fetched item
//       } catch (error) {
//         console.error("Failed to fetch item details:", error);
//       }
//     };

//     fetchData(); // Call the function to fetch data
//   }, [params.id]); // Dependency array ensures the effect runs when the `id` changes

//   // Function to handle Add to Cart
//   const handleAddToCart = () => {
//     if (item) {
//       addToCart(item); // Add item to cart
//       alert(`${item.title} has been added to your cart!`);
//     }
//   };

//   // Return loading state or error if item is not available yet
//   if (!item) {
//     return <div>Loading...</div>; // Show loading state while the data is being fetched
//   }


  
//   return (
//     <div>

//             <div className="mt-10 lg:mt-16 xl:mt-20 font-serif  px-8 md:px-20 lg:px-32 xl:px-32 ">

//               <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline text-center">{item.title}</h1>
//               <div className="p-3 my-10 lg:p-5 lg:my-16 xl:p-10 xl:my-20 border-[1px] ">

//                 <div className="md:flex justify-center items-start gap-10 lg:gap-16 xl:gap-32">
//                   <div className=" flex items-center justify-center flex-1">
//                     <Image src={item.image} alt="items.title" width={300} height={300} className="w-40 h-40 lg:w-60 lg:h-60 xl:w-96 xl:h-96 object-contain"></Image>
//                   </div>


//                   <div className="flex-1">
//                     <div className="my-3 ">
//                       <h1 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold ">{item.title}</h1>
//                     </div>
//                     <div className="my-3">
//                       <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-justify">{item.description}</p>
//                     </div>
//                     <div className="my-3 font-bold text-sm md:text-lg lg:text-xl xl:text-2xl ">
//                       <h1>{item.price}</h1>
//                     </div>
//                     <div className="text-sm md:text-lg lg:text-xl xl:text-2xl">
//                       <p>Color Family: <strong>Black</strong></p>
//                     </div>
//                     <div className="flex justify-center items-center gap-10 lg:gap-20 mt-8 lg:mt-12 xl:mt-16">

                      
//                         <Image src={"/shop.png"} alt="Buy Now" width={280} height={280} className="w-52 h-12 lg:w-full lg:h-full object-contain cursor-pointer"></Image>
                      

                     
//                         <Image  src={"/addCart.png"} alt="Add to Cart" width={280} height={280} onClick={handleAddToCart}  className="w-48 h-8 lg:w-full lg:h-full object-contain cursor-pointer"></Image>
                      

//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
    

//     </div>
//   )
// }
// export default Detail

