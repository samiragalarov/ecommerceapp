import { render } from '@testing-library/react';
import React, { useState, useEffect ,useContext} from 'react';
import './components/flash.css'
import jsonn from './quiz.json/quiz.json'
import {MovieProvider} from './context/sonuccontext'
import { MovieContext } from './context/sonuccontext';

// import { useContext } from 'react';
//import Start from './component/start'
const Start = (props) => {






    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Start game</h1>
                    <button onClick={props.Change}>Start game</button>



                </div>

            </div>



        </div>
    )
}
const Questionss = (props) => {
    const [sualcard, setsualcard] = useState(jsonn.data[0]['questino'])
    const [cavabcard, setcavabcard] = useState(jsonn.data[0]['choice'][0])
    const [cavabcard2, setcavabcard2] = useState(jsonn.data[0]['choice'][1])
    const [cavabcard3, setcavabcard3] = useState(jsonn.data[0]['choice'][2])
   // const [dogru, setdogru] = useState(0)
    const [yanlis, setyanlis] = useState(0)
   


    const [i, seti] = useState(1)
    const [dogru,setdogru]=useContext(MovieContext)
    //const [e, setie] = useState(0)
    //const [f, setf] = useState(1)
   // const [d, seta] = useState(2)
    useEffect(() => {
        // Brauzer API-ı ilə dokument başlığını yeniləyin
        document.querySelectorAll(".cavab").forEach(item=>item.addEventListener("click",()=>{
            document.getElementById("yeni1").disabled=true
            document.getElementById("yeni2").disabled=true
            document.getElementById("yeni3").disabled=true
            setyanlis(yanlis+1)
        })

        )
    });
    useEffect(() => {
        // Brauzer API-ı ilə dokument başlığını yeniləyin
        document.getElementById("next").addEventListener('click',()=>{
            document.getElementById("yeni1").disabled=false
            document.getElementById("yeni2").disabled=false
            document.getElementById("yeni3").disabled=false
            

        })
        

       

        
    });
    useEffect(() => {
        if (i==3) {
            document.getElementById("son").style.display="flex"
            
        }else{
            document.getElementById("son").style.display="none"

        }

      });



    

    const button1 = () => {
       
        if (cavabcard == jsonn.data[0]['answer'] || cavabcard == jsonn.data[1]['answer'] || cavabcard == jsonn.data[2]['answer']) {
            setdogru(dogru + 1)
            console.log(dogru)
           
           

        } else {
            console.log('sdoi')
            setyanlis(yanlis + 1)
            console.log(yanlis)
        }


    }
    const button2 = () => {
        if (cavabcard2 == jsonn.data[0]['answer'] || cavabcard2 == jsonn.data[1]['answer'] || cavabcard2 == jsonn.data[2]['answer']) {
            setdogru(dogru + 1)
            console.log(dogru)
            

        } else {
            setyanlis(yanlis + 1)
            console.log(yanlis)
        }


    }
    const button3 = () => {
        if (cavabcard3 == jsonn.data[0]['answer'] || cavabcard3 == jsonn.data[1]['answer'] || cavabcard3 == jsonn.data[2]['answer']) {
            setdogru(dogru + 1)
            console.log(dogru)
          

        } else {
            setyanlis(yanlis + 1)
            console.log(yanlis)
        }


    }


    const basla = () => {


       
            // Brauzer API-ı ilə dokument başlığını yeniləyin

    
            
        

        seti(i + 1)


        setsualcard(jsonn.data[i]['questino'])
        setcavabcard(jsonn.data[i]['choice'][0])
        setcavabcard2(jsonn.data[i]['choice'][1])
        setcavabcard3(jsonn.data[i]['choice'][2])

        if (cavabcard =="sagaol") {
            document.getElementById('next').style.display="none"
            
        }



    }

    
        return(
            
                <div className="container">


                    <div className="box">
                        <h1>{sualcard}</h1>
                        <button onClick={button1} id="yeni1" className="cavab" >{cavabcard}</button>
                        <button onClick={button2} id="yeni2" className="cavab" >{cavabcard2}</button>
                        <button onClick={button3} id="yeni3" className="cavab" >{cavabcard3}</button>

                        <button id="next" className="next" onClick={basla}>next</button>
                       
      
                        <button className="son" id="son" onClick={props.Change2}>oyunu bitir</button>
                        


                    </div>




                </div>

         


        )


        
    }

   
        

const Xal = (props) => {
   // const value=useContext(MovieContext)
   const [dogru,setdogru]=useContext(MovieContext)
    
    return(
        <div className="card">
        <div className="card-content">
            <h1>Dogru:{dogru}</h1>
            <br/>
            <h1>Yanlis:{3-dogru}</h1>


        </div>



    </div>




    )


} 



const App = (props) => {
    const [durum, setdurum] = useState("true")

    const Change = () => {
        setdurum("false")
    }
    const Change2 = () => {
        setdurum("malse")
        
    }
    console.log(durum)


    if (durum == "true") {
        return (
            <MovieProvider>
                 <Start Change={Change} />

            </MovieProvider>


           





        )

    } else if(durum=="false") {
        return (
            <MovieProvider>
                  <Questionss  Change2={Change2}/>

            </MovieProvider>
          

        )

    }else if (durum =="malse") {
        return(

            <MovieProvider>
                
                 <Xal/>
            </MovieProvider>
           
        )
        
    }



}
export default App

