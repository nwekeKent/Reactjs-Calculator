import React, { Component } from 'react'
import Result from './Components/ResultComponent/Result'
import CalculatorKeys from './Components/CalcKeysComponent/CalculatorKeys'

import './App.css'


 class App extends Component {
   state = {
      result: ''
   }

   buttonPressed = (btnValue) => {
      if(btnValue === 'equals'){
            this.calculateFn()

      }else if(btnValue === 'allClear'){
         this.clearAll()
      
      }else if(btnValue === 'negate'){
         this.negate()
      }else{
       this.setState({
          result : this.state.result + btnValue
       })
      }
      
   }

   clearAll = () =>{
         this.setState({
            result: ''
         })
   }

   calculateFn = () => {
         this.setState({
            result : eval(this.state.result.replace(/,/g,''))
         })
   }
   negate = () => {
      this.setState({
         result : (this.state.result * -1) 
      })
   }
    
   render() {
      return (
         <div className="app">
            <div className="calc-wrapper">
                  <Result result={this.state.result}/>
                  <CalculatorKeys buttonPressed={this.buttonPressed}/>
            </div>
         
         </div>
        
      )
   }
}
 
export default App
