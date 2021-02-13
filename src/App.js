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
      }else if(btnValue === 'percent'){
         this.percentage()
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
          // eslint-disable-next-line
         result : eval(this.state.result)
         
      })
      
        
   }
   negate = () => {
      this.setState({
         result : (this.state.result * -1) 
      })
   }

   percentage = () => {
      this.setState({
         result : (this.state.result / 100).toString()
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
