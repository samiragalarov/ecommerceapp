import React, { useState } from 'react'
import styled from 'styled-components';
import style from "styled-components";


const  Skill=(props)=>{

    
    



    return(
        <div className="skillcard" >
            <div className='skillcardtext' >

                  <h2>{props.lan}</h2>
          
                

            </div>
            <div className="skillcardvalue">
            <meter style={{width:'160px',height:"25px",marginRight:"10px"}}  value={props.meter} ></meter>
               
                
                
               
                <h6 style={{color:'#1890ff'}}>70%</h6>

            </div>

        </div>
   
    )

}
export default Skill