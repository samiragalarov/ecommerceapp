import React from 'react';
class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            bir:"",
            iki:""
 
        }
    }
    render(){
        return(
            <div>
                <input onChange={this.handelChange} name="bir" value={this.state.bir}/>
                <input onChange={this.handelChange} name="iki" value={this.state.iki}/>
                <button onClick={this.topla}>+</button>
                <div id="hey"></div>
            </div>
            
            
        )
    }
    handelChange=(event)=>{

               this.setState({
                   [event.target.name]:event.target.value
               })
       
       
    }
    topla=(event)=>{
        const a=Number(this.state.bir)
        const b=Number(this.state.iki)
        console.log(a+b)
        document.getElementById("hey").innerHTML=a+b
    }


}
export default App