import React,{useState,useEffect, useContext} from 'react'
import '/Users/samiragalarov/yeni fayl/my-react-app/my-app/src/react/my-app/src/ecommerceapp/stylecommerce.css'
import Cards from './cards'
import Card from './cards'
import jsonn from './e-cmorerce.json'
import {MovieProvider} from './ecomcontext'
import { MovieContext } from './ecomcontext';

import { BiBasket} from "react-icons/bi";

const Page1 = (props) => {

  
    const [phonecard,setphonecard]=useState(jsonn.phonecard)
    const { say, array,imghey,qiymet } = React.useContext(MovieContext);
    const [shop,setshop]=say
    const [samir,setsamir]=array
    const  [img,setimg]=imghey
    const [costt,setcostt]=qiymet
    const heyd=()=>{

    }
    setshop(samir.length)


    useEffect(() => {
        document.getElementById('phone').addEventListener('click', () => {

            setphonecard(jsonn.phonecard)
        })
        document.getElementById('dress').addEventListener('click', () => {

            setphonecard(jsonn.drescard)
        })
        document.getElementById('laptop').addEventListener('click', () => {

            setphonecard(jsonn.laptopcard)
        })
        document.getElementById('apple').addEventListener('click', () => {

            setphonecard(jsonn.apple)
        })


        
      });

      const sebet1=()=>{
          samir.push(phonecard[0].prodoctname)
          img.push(phonecard[0].img)
          costt.push(phonecard[0].cost)
          console.log(samir)
          shop<5 ? setshop(shop+1): alert('Your baskest is ful,lets clear it')
          
          console.log(img)
          


      }
      const sebet2=()=>{
        samir.push(phonecard[1].prodoctname)
        img.push(phonecard[1].img)
        costt.push(phonecard[1].cost)
        console.log(samir)
        shop<5 ? setshop(shop+1): alert('Your baskest is ful,lets clear it')
        


    }
    const sebet3=()=>{
        samir.push(phonecard[2].prodoctname)
        img.push(phonecard[2].img)
        costt.push(phonecard[2].cost)
        console.log(samir)
        shop<5 ? setshop(shop+1): alert('Your baskest is ful,lets clear it')
        


    }
    const sebet4=()=>{
        samir.push(phonecard[3].prodoctname)
        img.push(phonecard[3].img)
        costt.push(phonecard[3].cost)
        console.log(samir)
        shop<5 ? setshop(shop+1): alert('Your baskest is ful,lets clear it')
        


    }
    const sebet5=()=>{
        samir.push(phonecard[4].prodoctname)
        img.push(phonecard[4].img)
        costt.push(phonecard[4].cost)
        console.log(samir)
        shop<5 ? setshop(shop+1): alert('Your baskest is ful,lets clear it')
        


    }
    const sebet6=()=>{
        samir.push(phonecard[5].prodoctname)
        img.push(phonecard[5].img)
        costt.push(phonecard[5].cost)
        console.log(samir)
        shop<5 ? setshop(shop+1): alert('Your baskest is ful,lets clear it')
        


    }

    
    
  
    return (
        <div className="container">
            

         
            <div className="navbar">
                <div className="filter">
                    <div id="phone" className='filteritem'>
                        <h2>phone</h2>
                        

                    </div>
                    <div id='dress' className='filteritem'>
                        <h2>dress</h2>
                       

                    </div>
                    <div id='laptop' className='filteritem'>
                        <h2>laptop</h2>
                       

                    </div>
                    <div id='apple' className='filteritem'>
                        <h2>apple</h2>
                    

                    </div>



                </div>
                <div className="shop">
                    <h1 >{shop}</h1>
                    <div style={{marginRight:'18px',cursor:'pointer'}} onClick={props.Change} className="page2">
                    < BiBasket size={60} color='aliceblue'/>
                        
                    </div>
                    
                

                </div>


            </div>
            <div className="main">
                <div className="cardcontainer">
                   
                
                  
                    <div className='box'>
                        <div>
                            <Card
                                prodoctname1={phonecard[0].prodoctname}
                                prodoctimg1={phonecard[0].img}
                                prodoctcost={phonecard[0].cost}



                            />

                        </div>
                        <div onClick={sebet1} className="sebet">
                             <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>Add to cart</h1>
                            

                        </div>




                    </div>
                     <div className='box'>
                     <div>
                            <Card
                                prodoctname1={phonecard[1].prodoctname}
                                prodoctimg1={phonecard[1].img}
                                prodoctcost={phonecard[1].cost}



                            />

                        </div>
                        <div onClick={sebet2} className="sebet">
                            <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>Add to cart</h1>
                        
                            

                        </div>


                    </div>
                    <div className='box'>
                    <div>
                            <Card
                                prodoctname1={phonecard[2].prodoctname}
                                prodoctimg1={phonecard[2].img}
                                prodoctcost={phonecard[2].cost}



                            />

                        </div>
                        <div onClick={sebet3} className="sebet">
                           <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>Add to cart</h1>

                            

                        </div>


                    </div>
                    <div className='box'>
                    <div>
                            <Card
                                prodoctname1={phonecard[3].prodoctname}
                                prodoctimg1={phonecard[3].img}
                                prodoctcost={phonecard[3].cost}



                            />

                        </div>
                        <div onClick={sebet4} className="sebet">
                            <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>Add to cart</h1>
                            

                        </div>
              

                    </div>
                    <div className='box'>
                    <div>
                            <Card
                                prodoctname1={phonecard[4].prodoctname}
                                prodoctimg1={phonecard[4].img}
                                prodoctcost={phonecard[4].cost}



                            />

                        </div>
                        <div onClick={sebet5} className="sebet">
                            <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>Add to cart</h1>
                            

                        </div>


                    </div>
                    <div className='box'>
                    <div>
                            <Card
                                prodoctname1={phonecard[5].prodoctname}
                                prodoctimg1={phonecard[5].img}
                                prodoctcost={phonecard[5].cost}



                            />

                        </div>
                        <div onClick={sebet6} className="sebet">
                             <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>Add to cart</h1>
                            

                        </div>
              
                            

                    </div>   


                    

                </div>



            </div>


        </div>
    )
}

export default Page1