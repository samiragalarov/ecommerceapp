import React from 'react'
import ReactDom from 'react-dom'
import Validation from './cardvalidation'

export default function Modal({close}) {


  return (
      <div className="modalcontainer">
          <div className="modalheader">
             <h1 onClick={()=>{close(false)}}>x</h1>

          </div>
          <div className="modalbox">
              <Validation/>

          </div>
          

      </div>

  )
}