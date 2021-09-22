import React from 'react';


class CardEditor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            front:"",
            back:"",
            editor:false
            
        }
        
    }
    render(){
        const rows=this.props.cards.map((card,i)=>{
            return(
                <tr key={i}>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td><button onClick={this.deleteCards}>Delete</button></td>
                </tr>
            )
        })
        return(
            <div>
                <h1>Card editor</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {rows}

                    </tbody>
                </table>
                <br/>
                <input name="front" value={this.state.front} onChange={this.handelChange}  placeholder="front face"/>
                <input name="back" value={this.state.back} onChange={this.handelChange}  placeholder="back face"/>
                <button  onClick={this.addCard}>Add</button>
                
                <button onClick={this.props.Change}>Go to viewer</button>
            </div>
            
        )


  
        
    }
    addCard= () =>{
        this.props.addCard(this.state.front,this.state.back);

        this.setState({front:"",back:""})

        
       
    }
    deleteCards=(event)=>{
         this.props.deleteCards(event.target.dataset.index)

    }

    handelChange=(event)=>{
 /*       if (event.target.name==="front") {
            this.setState({front: event.target.value});
            


            
        }else if(event.target.name==="back"){
            this.setState({back: event.target.value});
          
            

        }*/
        this.setState({
            [event.target.name]:event.target.value
        })


      }

}
class CardViewer extends React.Component{





        
        
        
        //  const back=this.props.cards.map((card,i)=>{
        //      return(
        //          <div>{card}</div>
        //      )
        //  })
        //   const front=this.props.cards.map((card,i)=>{
        //      return(
        //          <div key={i}>{card}</div>
        //      )
        //  })
        // return(
        //     <div>{front}</div>
        // )
        // return(
        //     <div>{}</div>
        // )
        render(){
            // return(
                
            // )
            return(<div> </div>, 
            <button onClick={this.props.Change}>Go to viewer</button>)
                


        }
    }


        

        



    
    


    
    // deyis=()=>{
    //     document.getElementById("hey").style.display='none'
    //     document.getElementById("hey2").style.display="flex"
    // }

    






class App extends React.Component{
    constructor(props){
        super(props) ;
        this.state={
            editor:true,
            cards:[]
        }   
    }
    render(){
        if(this.state.editor){
            return <CardEditor deleteCards={this.deleteCards} addCard={this.add} cards={this.state.cards} 
            Change={this.Change}
            />
        }else{
            return<CardViewer
            cards={this.state.cards}
             Change={this.Change}
             />
             
        }

        
       // <Back cards={this.state.cards} />

        
        
   
        
    }
    Change=()=>{
        this.setState(state=>({
            editor:!state.editor
        }))
    }

    add=(front,back)=>{
        this.setState(state=>({
            cards:[...state.cards,{front:front,back:back}]
        }))

    }
    deleteCards=(index)=>{
        this.setState(state=>{
          const  cards=[...state.cards]
          cards.splice(index,1)
          return{
            cards:cards
          }
         
          
          
        })
    
    
        
      }

}

export default App