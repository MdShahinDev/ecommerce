import { Children, createContext, useEffect, useState } from "react"
import axios from 'axios';


const apiData = createContext();
const ContextApi = ({children}) => {

  let [info, setInfo] = useState([])
    useEffect(()=>{
     axios.get('https://dummyjson.com/products')
    .then((res)=> setInfo(res.data.products));
},[])

  return (
    <>
     <apiData.Provider value={info}> {children} </apiData.Provider>   
    </>
  )
}

export {apiData, ContextApi} 