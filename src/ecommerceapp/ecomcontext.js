
import React,{useState,createContext} from "react"
import App from "./app"


export  const MovieContext=createContext()

export const  MovieProvider=props =>{
    const [shop, setshop] = useState(0)
    const  [samir,setsamir]=useState([])
    const  [img,setimg]=useState([])
    const [costt,setcostt]=useState([])
  
   
   
    return(
        <MovieContext.Provider value={{ array: [samir,setsamir], say: [shop,setshop],imghey: [img,setimg],qiymet:[costt,setcostt] }}  >
            {props.children}
           


        </MovieContext.Provider>
        
    )
}
  