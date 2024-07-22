

export async function  GET(request: Request){
    try {

 
       const response = await fetch(`https://dummyjson.com/products?limit=${1}`); // fetch 10 products data from dummyjson.com
      
       if (!response.ok) {
           throw new Error(`Failed to fetch data: ${response.statusText}`);
         }
     
         const data = await response.json();
     
         return Response.json({
           message: "Data fetched successfully",
           success: true,
           data: data.products, // Assuming the API response has a `products` array
         }, {
           status: 200
         })
   
       
    } catch (error) {
        console.log("This  is error " , error);
   
        return  Response.json({
           sucess: false,
           message: "An error occured"
        },{
           status: 500
        })
    }
   }