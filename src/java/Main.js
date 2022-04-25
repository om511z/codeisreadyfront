import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import java from '../icons/java.svg'

const Main = () => {
  return (
    <Fragment>
      <div className='sp'>
      <section id="secondpage">
        <div className="secondpage SecondContainer">
          <div className="secondpage-items">
            <div className="secondpage-item">
              <Link to="/java/projects">
                <div><img className='iconjava' src={java} alt='' /></div>
                <br></br><br></br>
                <div className="secondpage-info">
                  <h1>Projects</h1>

                </div>
              </Link>
            </div>
            <div className="secondpage-item">
              <Link to="/java/quiz">
                <div><img className='iconjava' src={java} alt='' /></div>

                <br></br><br></br>
                <div className="secondpage-info">
                  <h1>Quiz</h1>

                </div>
              </Link>
            </div>
            <div className="secondpage-item">
              <Link to="/java/program">
                <div><img className='iconjava' src={java} alt='' /></div>

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
      <hr></hr>
      <div className="container info-text" data-aos="fade-up">
        <h1>

          What is Java ?
        </h1>
        <br></br>
        <h4>
        Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.
        </h4>
        <hr></hr>
        <br></br>
        <h1>
          Uses of Java
        </h1>
        <br></br>
        <h4>
          1. It is used for developing Android Apps.<br></br>
          2. Helps you to create Enterprise Software.<br></br>
          3. Internet navigation.<br></br>
          4. Wide range of Mobile java Applications.<br></br>
          5. Scientific Computing Applications. <br></br>
          6. Use for Big Data Analytics. <br></br>
          7. Java Programming of Hardware devices. <br></br>
          8. Used for Server-Side Technologies like Apache, JBoss, GlassFish, etc..<br></br>
        </h4>
        <hr></hr>
        <br></br>
        <h1>
        Java Features
        </h1>
        <br></br>
        <h4>
          1. It is one of the easy-to-use programming languages to learn.<br></br>
          2. Write code once and run it on almost any computing platform.<br></br>
          3. Java is platform-independent. Some programs developed in one machine can be executed in another machine.<br></br>
          4. It is designed for building object-oriented applications.<br></br>
          5. It is a multithreaded language with automatic memory management. <br></br>

        </h4>
        <br></br>
      
      </div>
</div>
    </Fragment>
  )
}

export default Main