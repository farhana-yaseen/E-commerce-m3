
export const getData = async()=>{
    try {
        const fetchData = await fetch(" https://fakestoreapi.com/products")
        
        if (fetchData.status !==200){
            throw new Error(`Data not Found ${fetchData.status} ${fetchData.statusText}`)
        }else{
            const res = await fetchData.json()
            return{data:res, message: "Data fetch successfully", success:true}
        
        }
         
    } catch (err) {
        return{data: null, err, success:false}
        
    }
}