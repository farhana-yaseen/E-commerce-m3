"use client"

import { useState } from "react";
import { CiSearch } from "react-icons/ci";




const SearchBar = ()=>{

    const [searchBar, setSearchBar] = useState('');
  


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBar(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
  };


    return(
        <div className="">

            <form onSubmit={handleSearchSubmit} className="flex justify-between items-center gap-2 rounded-lg bg-gray-100 p-2 flex-1">
                <input name="search" type="text" value={searchBar} onChange={handleSearchChange} placeholder="Search" className="flex-1 bg-transparent md:w-28 md:h-5 lg:w-48 xl:w-72 xl:h-10 text-sm lg:text-base xl:text-lg" />
                <button name="submit" type="submit" className="cursor-pointer w-4 md:w-5 lg:w-6 xl:w-8">
                  {/* search icon */}
                <CiSearch className="text-black text-lg lg:text-2xl xl:text-4xl"/>
                </button>

            </form>
                   
                    
                

        </div>
    )
}
export default SearchBar