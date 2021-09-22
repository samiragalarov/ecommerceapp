import React, { useState } from 'react';
//import "./App.css"

/*class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      num1: Math.ceil(Math.random() *10),
      num2: Math.ceil(Math.random() *10),
      score:0,
      response:"",

    }
  }
  // const={num1=this.state}//baxarsan
  renderPriblem(){
    return(
      <div>
        <h1>{this.state.num1}+{this.state.num2}</h1>
        <input onKeyPress={this.inputKeyPress} onChange={this.updateresponse} value={this.state.response}/>
        deyer {this.state.response}
        <div>
          score:{this.state.score}
        </div>
      </div>
    )
      
    
  }
  rendrwinn(){
    return(
      <h1>qazandin</h1>

    )
  }
  render(){
    if (this.state.score>=5) {
      return  this.rendrwinn()
       
      
    }else{
       return this.renderPriblem()
    }
  }
  updateresponse=(event)=>{
    this.setState(
      {
        response: event.target.value
        
      }
    )
    

  }

  inputKeyPress=(event)=>{
    if(event.key==="Enter"){
      const answer=parseInt(this.state.response)  
      if(answer== this.state.num1+this.state.num2){
        this.setState(state=>({
          score:state.score+1,
          num1 :Math.ceil(Math.random() *10) ,
          num2 : Math.ceil(Math.random() *10),
          response:""

        }))


      }else{
        this.setState({
          response:"",
         

        })

      }

      }
    

  }
} */


export default App;
function App(){
  const [num1,setnum1]=useState(0)
  const [num2,setnum2]=useState(0)
  const [value ,setvalue]=useState("")
  const [score,setScore]=useState(0)

  function handleChange(event){
    setvalue(event.target.value)
  }
  function nextQuestion(){
    if (num1+num2== Number(value)) {
      setScore(score+1)
      
    }else{
      setnum1(setnum1)
      setnum2(setnum2)
    }
    setvalue("")
    console.log(num1+num2)
    setnum1(Math.floor(Math.random() * 10))
    setnum2(Math.floor(Math.random() * 10))
  }
  function hey(){
    alert('wejk')
  }
  return(
    <div>
        <h1>{num1}+{num2}</h1>
        <input onChange={handleChange} value={value} />
        <button onClick={nextQuestion}>click</button>
        <button onClick={hey}>heyy</button>
        <p>{score}</p>
      
    </div>
  )
 


  
}

/*
export default App

function App() {
  //const[first,setfirst]=useState(0)
  //const[second,setsecond]=useState(0)
  //const items=document.querySelectorAll(".item")
  function hey(){
    alert("kejn")
  }
  function mey(){
    alert('wjkn')
  }
  

  
  
  return (
    // <div className="box">
    //   <div id="item1" className="item"></div>
    //   <div id="item2" className="item"></div>
    //   <div id="item3" className="item"></div>
    //   <div id="item4" className="item"></div>
    //   <div id="item5" className="item"></div>
    //   <div id="item6" className="item"></div>
    //   <p>{first}</p>


    // </div>
    <div>
      <button onclick={mey}></button>
      <div onclick={hey} id="item1">heyy</div>
    </div>

  )






}*/