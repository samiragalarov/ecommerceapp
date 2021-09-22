
import React,{useState,createContext} from "react"


export  const MovieContext=createContext()

export const  MovieProvider=props =>{
    const [dogru, setdogru] = useState(0)
    return(
        <MovieContext.Provider value={[dogru,setdogru]}>
            {props.children}


        </MovieContext.Provider>
        
    )
}
  
