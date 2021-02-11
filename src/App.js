import React, { Component } from 'react'
import Result from './Components/ResultComponent/Result'
import CalculatorKeys from './Components/CalcKeysComponent/CalculatorKeys'

import './App.css'


 class App extends Component {
   state = {
      result: 0
   }
   
   render() {
      return (
         <div className="app">
            <div className="calc-wrapper">
                  <Result result={this.state.result}/>
                  <CalculatorKeys />
            </div>
         
         </div>
        
      )
   }
}
 
export default App
