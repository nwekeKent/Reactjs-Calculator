import React from 'react';

import './CalculatorKeys.css'


const CalculatorKeys = ({buttonPressed}) => {
    return (
        <div className="calc-buttons">
            <button value='allClear' onClick={(e) => {buttonPressed(e.target.value)}}>AC</button>
            <button value='negate' onClick={(e) => {buttonPressed(e.target.value)}}>+/-</button>
            <button value='%' onClick={(e) => {buttonPressed(e.target.value)}}>%</button>
            <button value='/' onClick={(e) => {buttonPressed(e.target.value)}}>&#247;</button>
            
            <button value='7' onClick={(e) => {buttonPressed(e.target.value)}}>7</button>
            <button value='8' onClick={(e) => {buttonPressed(e.target.value)}}>8</button>
            <button value='9' onClick={(e) => {buttonPressed(e.target.value)}}>9</button>
            <button value='*' onClick={(e) => {buttonPressed(e.target.value)}}>&times;</button>

            <button value='4' onClick={(e) => {buttonPressed(e.target.value)}}>4</button>
            <button value='5' onClick={(e) => {buttonPressed(e.target.value)}}>5</button>
            <button value='6' onClick={(e) => {buttonPressed(e.target.value)}}>6</button>
            <button value='-' onClick={(e) => {buttonPressed(e.target.value)}}>-</button>

            <button value='1' onClick={(e) => {buttonPressed(e.target.value)}}>1</button>
            <button value='2' onClick={(e) => {buttonPressed(e.target.value)}}>2</button>
            <button value='3' onClick={(e) => {buttonPressed(e.target.value)}}>3</button>
            <button value='+' onClick={(e) => {buttonPressed(e.target.value)}}>+</button>

           
            <button  value='0' id="zero" onClick={(e) => {buttonPressed(e.target.value)}}>0</button>
            <button value='.' onClick={(e) => {buttonPressed(e.target.value)}}>.</button>
            <button value='equals' onClick={(e) => {buttonPressed(e.target.value)}}>=</button>
           </div>
    )
}

export default CalculatorKeys