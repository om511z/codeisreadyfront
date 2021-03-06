import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import html from '../icons/html.svg'

const Htmlmain = () => {
  return (
    <Fragment>
      <div className='sp'>
      <section id="secondpage">
        <div className="secondpage SecondContainer">
          <div className="secondpage-items">
            <div className="secondpage-item left1">
              <Link to="/html/projects">
                <div><img src={html} alt='' /></div>
                <br></br><br></br>
                <div className="secondpage-info">
                  <h1>Projects</h1>

                </div>
              </Link>
            </div>
            <div className="secondpage-item">
              <Link to="/html/quiz">
                <div><img src={html} alt='' /></div>

                <br></br><br></br>
                <div className="secondpage-info">
                  <h1>Quiz</h1>

                </div>
              </Link>
            </div>
            <div className="secondpage-item right1">
              <Link to="/html/program">
                <div><img src={html} alt='' /></div>

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
          What is HTML ?
        </h1>
        <br></br>
        <h4>
          HTML stands for Hyper Text Markup Language.
          HTML is the standard markup language for creating Web pages.
          HTML describes the structure of a Web page.
          HTML consists of a series of elements.
          HTML elements tell the browser how to display the content.
        </h4>
        <hr></hr>
        <br></br>
        <h1>
          Uses of HTML
        </h1>
        <br></br>
        <h4>
          1. Web pages development.<br></br>
          2. Web document Creation.<br></br>
          3. Internet navigation.<br></br>
          4. Cutting edge feature.<br></br>
          5. Responsive images on web pages. <br></br>
          6. Client-side storage. <br></br>
          7. Offline capabilities usage. <br></br>
          8. Data Entry support with HTML.<br></br>
        </h4>
        <hr></hr>
        <br></br>
        <h1>
          What is CSS ?
        </h1>
        <br></br>
        <h4>
          CSS stands for Cascading Style Sheets.
          CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
          CSS saves a lot of work. It can control the layout of multiple web pages all at once.
          External stylesheets are stored in CSS files.
        </h4>
        <br></br>
        <hr></hr>
        <br></br>
        <h1>
          Uses of CSS
        </h1>
        <br></br>
        <h4>
          1. CSS is used for defining the styles for web pages.<br></br>
          2. It describes the look and formatting of a document which is written in a markup language.<br></br>
          3. It provides an additional feature to HTML.<br></br>
          4. It is generally used with HTML to change the style of web pages and user interfaces.<br></br>
          5. It is easier to make the web pages presentable using CSS. <br></br>

        </h4>
        <br></br>
        <hr></hr>
        <br></br>
        <h1>
          What is Javascript ?
        </h1>
        <br></br>
        <h4>
          JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

          JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.
        </h4>
      </div>
      <br></br><br></br>
      </div>

    </Fragment>
  )
}

export default Htmlmain