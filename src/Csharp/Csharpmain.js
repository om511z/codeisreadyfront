import React, { Fragment,useEffect } from 'react'
import { Link } from 'react-router-dom'

import csharp from '../icons/csharp.svg'
import '../Csharp/Csharp.css'
const Csharpmain = () => {


  return (
    <Fragment>
<div className='sp'>
      <section id="secondpage">
        <div className="secondpage SecondContainer">
          <div className="secondpage-items">
            <div className="secondpage-item left1">
              <Link to="/csharp/projects">
                <div className="icon"><img src={csharp} alt='' /></div>
                <br></br><br></br>
                <div className="secondpage-info">
                  <h1>Projects</h1>

                </div>
              </Link>
            </div>
            <div className="secondpage-item">
              <Link to="/csharp/quiz">
                <div className="icon"><img src={csharp} alt='' /></div>
                <br></br><br></br>
                <div className="secondpage-info">
                  <h1>Quiz</h1>

                </div>
              </Link>
            </div>
            <div className="secondpage-item right1">
            <Link to="/csharp/programs">
              <div className="icon"><img src={csharp} alt='' /></div>
              <br></br><br></br>
              <div className="secondpage-info">
                <h1>Programs</h1>

              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <br></br>
   
      <div className="container info-text " data-aos="fade-up">
        <h1>

          What is C#?
        </h1>
        <br></br>
        <h4>
          C# (pronounced "C-sharp") is an object-oriented programming language from Microsoft that aims to combine the computing power of C++ with the programming ease of Visual Basic.
          C# is designed to work with Microsoft's .NET platform. Microsoft's aim is to facilitate the exchange of information and services over the Web, and to enable developers to build highly portable applications. C# simplifies programming through its use of Extensible Markup Language (XML) and Simple Object Access Protocol (SOAP) which allow access to a programming object or method without requiring the programmer to write additional code for each step. Because programmers can build on existing code, rather than repeatedly duplicating it, C# is expected to make it faster and less expensive to get new products and services to market.

        </h4>
        <hr></hr>
        <br></br>
        <h1>
          Uses of C#
        </h1>
        <br></br>
        <h4>
          1. developing desktop applications.<br></br>
          2. web applications.<br></br>
          3. web services.<br></br>
          4. mobile apps.<br></br>
          5. cloud-based services. <br></br>
          6. Game Development <br></br>

        </h4>
        <br></br>
      </div>
      </div>
    </Fragment>
  )
}

export default Csharpmain