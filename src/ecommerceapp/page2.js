import { render } from '@testing-library/react'
import React,{useContext,useEffect,useState} from 'react'
import '/Users/samiragalarov/yeni fayl/my-react-app/my-app/src/react/my-app/src/ecommerceapp/stylecommerce.css'
import Page1 from './page1'
import Card from './cards'
import {MovieProvider} from './ecomcontext'
import { MovieContext } from './ecomcontext';
import Modal from './modal'

import { VscTrash } from "react-icons/vsc";




const Page2=(props)=>{
    const { array,imghey,qiymet } = React.useContext(MovieContext);
    const [samir,setsamir]=array
    const  [img,setimg]=imghey
    let [costt,setcostt]=qiymet


    //
    const [modal,setmodal]=useState(false)

  

    //

    console.log(costt)
    useEffect(() => {
        // totalprice
        if (costt.length ===0) {
            document.getElementById('totalprice').innerHTML="Not price"
            
        }else{
            document.getElementById('totalprice').innerHTML= 'Total price'+ costt.reduce((a, b) => a + b) +"$"

        }

         
       
        
     
      });

      



    
    return(
        <div className="page2container">
           {modal && <  Modal   close={setmodal}/>} 
            
       
            
           
            <div className='page2nav'>
                <h1 onClick={props.Change}>alis veris</h1>

            </div>
            <div className='tut'>
           

            
            <div id="sala"  className='carditems'>
                <div  className="carditem">
                    <div className="carditemimg">
                        <img  src={img[0]} />
                    </div>

                    <div className="carditemtext">
                        <div className="melumat">
                            <h2>model:{samir[0]}</h2> 
                            <h2>price:{costt[0]}$</h2>
                        </div>
                        <div className="carditemtextbutton">
                        <h2 onClick={()=>{
                            setsamir(samir.spli)
                        }} >Payment</h2>

                        </div>



                    </div>


                </div>
                <div className="carditem">
                    <div className="carditemimg">
                        <img src={img[1]} />
                    </div>
                    <div className="carditemtext">
                        <div className="melumat">
                            <h2>model:{samir[1]}</h2>
                            <h2>price:{costt[1]}$</h2>
                        </div>
                        <div className="carditemtextbutton">
                        <h2 >Payment</h2>

                        </div>



                    </div>


                </div>
                <div className="carditem">

                    <div className="carditemimg">
                        <img src={img[2]} />
                    </div>
                    <div className="carditemtext">
                        <div className="melumat">
                            <h2>model:{samir[2]}</h2>
                            <h2>price:{costt[2]}$</h2>
                        </div>
                        <div className="carditemtextbutton">
                        <h2 >Payment</h2>

                        </div>



                    </div>

                </div>
                <div className="carditem">

                    <div className="carditemimg">
                        <img src={img[3]} />
                    </div>
                    <div className="carditemtext">
                        <div className="melumat">
                            <h2>model:{samir[3]}</h2>
                            <h2>price:{costt[3]}$</h2>
                        </div>
                        <div className="carditemtextbutton">
                        <h2 >Payment</h2>

                        </div>



                    </div>

                </div>

                <div className="carditem">

                    <div className="carditemimg">
                        <img src={img[4]} />
                    </div>
                    <div className="carditemtext">
                        <div className="melumat">
                            <h2>model:{samir[4]}</h2>
                            <h2>price:{costt[4]}$</h2>
                        </div>
                        <div className="carditemtextbutton">
                            <h2>Payment</h2>

                        </div>



                    </div>
                </div>

            </div>
            <div className="payment">
                <div className="paymentbox">
                    <div className='paymentprice'>
                       <h2 id="totalprice"></h2>
                 
                    </div>
                    <div className="paymentbutton">
                        <div  onClick={()=>{setmodal(true)}} className="paymentbuttonitem">
                            <h3 style={{color:'white'}}>Payment</h3>

                        </div>
                        
                         
                                 
                            
                            


     
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>{
                            setimg([])
                            setcostt([])
                             setsamir([])
                          
                            
                        }}  id="cleart"  className="clearitems">
                            <h3>clear </h3><VscTrash color='aliceblue' size={20} style={{marginTop:'5px',marginLeft:'5px'}}/>

                        </div> 
                        

                    </div>

                </div>

            </div>
            </div>




        </div>
    )
      
      
        
    
}
export default Page2