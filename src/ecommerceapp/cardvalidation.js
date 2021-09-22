import React from 'react'



export default function Validation(){
    return(
        <div className="Validbox">
            <div className="validpart1">
               <h3>Card number</h3>
                <input placeholder="5641 6788 2423 2324 2427"/>

            </div>
            <div className="validpart2">
                <div className="input1">
                    <h3>Expriydate</h3>
                    <input  placeholder="MM/YY"/>

                </div>
                <div className="input2">
                    <h3>CVC/CVV</h3>
                    <input placeholder="123"/>

                </div>



            </div>
            
        </div>
    )
}