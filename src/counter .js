import React, { useState ,useEffect} from 'react';
import "./App.css"

const App = (props) => {
    //const [hasclick,sethasclick]=useState("false")
    const [count,setcount]=useState(0)
    const [count2,setcount2]=useState(0)
    
    
    
    React.useEffect(() => {
      let firstcard,secondcard
      let hasFlippedCard=false
     
        const item=document.querySelectorAll(".item")
        item.forEach(item=>item.addEventListener("click",()=>{
          item.classList.add('hey')
          if (!hasFlippedCard) {
            // first click
            hasFlippedCard = true;
            item.classList.add('hey')
            firstcard=item.id
           
            

        
          } else {
            // second click
            hasFlippedCard = false;
            item.classList.add('mey')
            secondcard=item.id
           
          
        
        
          }
          console.log(hasFlippedCard)
          if (firstcard == secondcard) {
            alert('wdkjn')
            
          }
          else{
            console.log('wdlk')
          }
         
          
          
            
             
            
           
            
            
        }))
    })
    
  
    return (
      <div className='box'>
        <div className="item" id="hey">1</div>
        <div className="item" id="mey"></div>
        <div className="item" id="hey">1</div>
        <div className="item" id="mey"></div>
        <div className="item" id="hey">1</div>
        <div className="item" id="mey"></div>
        
        <p>{count2}</p>
        <p>{count}</p>
      </div>
    );
  };
      
    


export default App