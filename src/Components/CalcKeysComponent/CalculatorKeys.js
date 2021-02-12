import React from 'react';

import './CalculatorKeys.css'


const CalculatorKeys = () => {
    return (
        <div className="calc-buttons">
            <button value='allClear'>AC</button>
            <button value='+'>+/-</button>
            <button value='%'>%</button>
            <button value='/'>&#247;</button>
            
            <button value='7'>7</button>
            <button value='8'>8</button>
            <button value='8'>9</button>
            <button value='8'>&times;</button>

            <button value='4'>4</button>
            <button value='5'>5</button>
            <button value='6'>6</button>
            <button value='-'>-</button>

            <button value='1'>1</button>
            <button value='2'>2</button>
            <button value='3'>3</button>
            <button value='+'>+</button>

           
            <button  value='0' id="zero">0</button>
            <button value='.'>.</button>
            <button value='equals'>=</button>
           </div>
    )
}

export default CalculatorKeys