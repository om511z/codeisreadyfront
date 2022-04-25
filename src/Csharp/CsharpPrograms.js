import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Csharpprogram from './Program';
const CsharpPrograms = () => {
  return (
     <div className='sp'>
    <div className='container'>
      <br></br><br></br><br></br>
        {Csharpprogram && Csharpprogram.map((programs) => (
            <div className='container' data-aos="fade-up">
               <h2> {programs.name}</h2>
               <hr></hr>
               <h2>Program: </h2>
               <SyntaxHighlighter language='javascript' style={coldarkCold} >

                  {programs.program}
               </SyntaxHighlighter>
               <h2>Output :</h2>
               <hr></hr>
               <SyntaxHighlighter language='javascript' style={coldarkCold}>
                  {programs.output}
               </SyntaxHighlighter>
               <hr></hr>
               <br></br>
               <br></br>

            </div>

         ))}

 
    </div>
    </div>
  )
}

export default CsharpPrograms