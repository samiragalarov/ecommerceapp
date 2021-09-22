import React, { useState, useEffect,useContext } from 'react';
import '/Users/samiragalarov/yeni fayl/my-react-app/my-app/src/react/my-app/src/ecommerceapp/stylecommerce.css'
import './page1'
import {MovieProvider} from './ecomcontext'
import { MovieContext } from './ecomcontext';





const Card=(props1)=>{
   
    const { say,imghey } = React.useContext(MovieContext);
   
    const [shop,setshop]=say
    const shoparray=[]

    //  document.querySelectorAll('.shopbutton').forEach(item=> item.addEventListener('click',()=>{
          
    //          setshop(shop+1)
             
           
  

    //  }))

 
   

   
   /* useEffect(() => {
        const samir=()=>{
            console.log(document.querySelectorAll('.shopbutton').length)
        }


       document.querySelectorAll('.shopbutton')[2].addEventListener('click', samir)
         return () => {
             document.querySelectorAll('.shopbutton')[2].removeEventListener('click', samir)
      
    
            };
    
           


    },[])*/



      



    return(
        <div className="cardbox">
            <div className="cardimg">
                 <img src={props1.prodoctimg1}/> 
               
               
              
              
                          

            </div>
            <div className="cardtext">
            
               <div  className='prodoctname'>
                   <h3>{props1.prodoctname1}</h3>
                   
 
                   
                </div>  
                <h3>{props1.prodoctcost}$</h3>


            </div>

        </div>
    )
    
}
export default Card