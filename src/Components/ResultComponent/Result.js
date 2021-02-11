import React from 'react';

import './Result.css'

const Result = ({result}) => {
    
    return (
        <div className="result-div">
               <div className="result-buttons">
                   <div className="red btn"></div>
                   <div className="yellow btn"></div>
                   <div className="green btn"></div>
               </div>
               <p className="result">{result}</p>
           </div>
    )
}

export default Result
