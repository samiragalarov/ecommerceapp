import { render } from '@testing-library/react';
  import React from 'react';
import Todo from './components/todo';


/*class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task:[],
      input:""
    }

  }
  render(){
    return(
      <div>
        <h2>add task</h2>
        <input type="text" onChange={this.handelChange} value={this.state.input}/>
        <button  onClick={this.addTask}>Add</button>
        <ul>
            {this.state.task.map((task,i)=>
             <li key={i}>
               <button data-index={i} onClick={()=>this.deleteTask(i)}>clear</button>
               
               {task}</li>
            )}
        </ul>

        
      </div>
    )
  }
  handelChange=(event)=>{

    this.setState({
      input:event.target.value
    })
  }
  addTask=()=>{
    this.setState(state=>({
      task:[...state.task,state.input],
      input:""
     

      
      
    }))
    
  }
  deleteTask=(index)=>{
    this.setState(state=>{
      const task=[...state.task]
      task.splice(index,1)
      return{
        task:task
      }
     
      
      
    })


    
  }



}
export default App*/

function App(){
  return(
    <div>
      <h2>Add taxk</h2>
      
    </div>
  )
}


