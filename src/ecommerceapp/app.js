import { render } from '@testing-library/react'
import React,{useContext, useState} from 'react'
import '/Users/samiragalarov/yeni fayl/my-react-app/my-app/src/react/my-app/src/ecommerceapp/stylecommerce.css'
import Page1 from './page1'
import Page2 from './page2'
import Card from './cards'
import {MovieProvider} from './ecomcontext'
import { MovieContext } from './ecomcontext';


const App = () => {
   
    const [page, setpage] = useState('page1')
    const change=()=>{
        setpage('page2')
    }
    const change2=()=>{
        setpage('page1')
    }
   


    
        if (page =="page1") {
            return (
                <MovieProvider>
                    <Page1 Change={change} />
                 
    
    
                </MovieProvider>
    
            )
            
        } else if(page == "page2"){
            return (
                <MovieProvider>
                    <Page2   Change={change2}/>
                    
    
    
                </MovieProvider>
    
            )
    
    
        }


    









}
export default App