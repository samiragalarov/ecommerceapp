import React from 'react';
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="main">
                <div className="navbar">
                    <div className='logo'>
                        <img src="data:image/png;base64,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"/>

                    </div>
                    <div className="menu">
                        <div className="item">
                            <h2>Home</h2>

                        </div>
                        <div className="item">
                            <h2>Contact</h2>

                        </div>
                        <div className="item">
                            <h2>About</h2>
                            
                        </div>
                        <div className="item">
                            <h2>Sign in</h2>
                            
                        </div>



                    </div>
                    

                </div>
                <div className="container">
                    <div className="yazi">
                    <h1>Get stated now</h1>


                    </div>
                    <div className='sekil'>
                        <div className='cercive'>
                            <img src="data:image/jpeg;base64,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"/>
                            <h3>Hi iam jack.I senior devoloper almost 3 years </h3>
                        </div>
                        
                    </div>

                    
                    

                </div>


            </div>
        )
    }
}
export default App