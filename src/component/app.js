import React,{useState,useEffect,useRef} from 'react'
import Questinon from './component/Question'




 
const App =(props)=>{
    const[start,setStart]=useState("false")
   // console.log(start)
    
    const mey=()=>{
        setStart("true")
       
    }
    if (start =="true") {
        return(
            <Start/>
        )
        
    }else{console.log('sankclan')

    }
    console.log(start)
    return(
        <Start/>
       
     
        
        
    )
}
export default App