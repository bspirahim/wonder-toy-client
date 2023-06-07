import { useEffect } from "react"

const useTitle = title =>{
   useEffect(()=>{
    document.title = `Wonder-Toy | ${title}`;
   },[])
}

export default useTitle;