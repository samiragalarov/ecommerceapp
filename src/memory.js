import React from 'react';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hey:'i am here'
        }

    }
    render() {
        return (
            <div >
                <Front />
                <Back/>
                
              
            </div>
        )
    }
   



}
//const items=document.getElementsByClassName("container")

export default App
class Front extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            input1:"",
            input2:"",
            task:[],
            task2:[]
        }

    }
    render() {
        return (
            <div className='container'>
                <div className='ad'>
                    <h2>Form validation</h2>

                </div>
                <div className='input1'>
                    <label>Ad</label>
                    <input onChange={this.handleChange} name="input1" value={this.state.input1} />

                </div>
                <div className='input2'>
                    <label>Soyad</label>
                    <input onChange={this.handleChange} name="input2" value={this.state.input2} />

                </div>
                <div className='button'>
                    <button onClick={this.elaveEt}>Click</button>

                </div>
                <ul>
                    <h1>Adlar</h1>
               {this.state.task.map((task,i)=>
                 
                 <li key={i}>
                     
              
               
                  {task}</li>
                 )}
                 </ul>
                 <ul>
                 <h1>Soyadlar</h1>
               {this.state.task2.map((taskd,i)=>
                 <li key={i}>
              
               
                  {taskd}</li>
                 )}
                 </ul>


            </div>

        )
    }
    handleChange=(event)=>{
        if (event.target.name== "input1") {
            this.setState({input1: event.target.value})
                
            
            
        }else if(event.target.name== "input2"){
            this.setState({input2: event.target.value})
                
            
        }


    }
   

    elaveEt=()=>{
        this.setState(state=>({
            task:[...state.task,state.input1],
            input1:"",
            task2:[...state.task,state.input2],
            input2:""
            
          }))
          if (this.state.input1.length >=7) {
              this.setState({
                  task:[]
              })
            
        }


    }



}
class Back extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="container2">
                <div className='liad'>
                    <ul>
                        <li>{this.props.hey}</li>
                        

                    </ul>

                </div>
                <div className='liad'>
                    <ul>

                    </ul>
                </div>
            </div>
            

        )
    }



}