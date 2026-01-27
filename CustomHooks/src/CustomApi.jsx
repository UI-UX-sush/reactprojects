import { useEffect, useState } from "react";

function useCustomApi(url){
const [data, setUser]=useState(null);

const fetchUser=()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=> setUser(data))
  .catch(err=>console.log("error",err))
 
  
}
useEffect(()=>{
    fetchUser();
},[url])

return data; 
}

export default useCustomApi;