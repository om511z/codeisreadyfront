import React, { Fragment } from 'react'
import Typewriter from 'typewriter-effect';
import './Homecss.css'
import path from '../icons/path.svg'
import wave1 from '../icons/w1.svg'
import wave2 from '../icons/w2.svg'
const MainScreen = () => {

   return (
      <Fragment>

         <div class="raj">

            <div class="row no-gutters">

               <div class="col">
                  <div class="left">
                     <div class="content left1">
                        <h1>We Create Projects in</h1>

                        <h2><Typewriter
                           options={{
                              strings: [' HTML CSS JAVASCRIPT', 'C Sharp(#)', "Java", "PHP", " React js"],
                              autoStart: true,
                              loop: true,
                           }}
                           onInit={(typewriter) => {
                              typewriter.typeString()
                                 .callFunction(() => {

                                 })
                                 .pauseFor(1000)
                                 .deleteAll()
                                 .callFunction(() => {

                                 })
                                 .start();
                           }}
                        /></h2>

                     </div>

                     <div class="content left1">
                        <ul>
                           <li>Buy projects in affordable price</li>
                           <li>24 x 7 Service</li>
                           <li>We sold over 100+ projects </li>
                           <li>Limited period offer</li>
                           <li>We create project as per your requirement </li>
                        
                        </ul>
                     </div>
                    
                  </div>
               </div>

               <div class="col">
                  <div class="right right1">

                     <div className="round1">

                        <div class="container py-md-5 py-4">
                           <div class="row align-items-center ">


                              <div class="holderCircle">

                                 <div class="round"></div>
                                 <div class="dotCircle">
                                    <span class="itemDot active itemDot1" data-tab="1">
                                       <i class="fa-brands fa-html5"></i>

                                    </span>
                                    <span class="itemDot  itemDot2" data-tab="2">
                                       <i class="fa-brands fa-python"></i>

                                    </span>

                                    <span class="itemDot  itemDot3" data-tab="3">
                                       <i class="fa-solid fa-hashtag"></i>

                                    </span>
                                    <span class="itemDot itemDot4" data-tab="4">
                                       <i class="fa-brands fa-react"></i>

                                    </span>
                                    <span class="itemDot itemDot5" data-tab="5">
                                       <i class="fa-brands fa-java"></i>

                                    </span>
                                    <span class="itemDot itemDot6" data-tab="6">
                                       <i class="fa-brands fa-js"></i>

                                    </span>
                                    <span class="itemDot itemDot7" data-tab="7">
                                       <i class="fa-brands fa-angular"></i>


                                    </span>
                                    <span class="itemDot itemDot8" data-tab="8">
                                       <i class="fa-solid fa-database"></i>

                                    </span>
                                 </div>
                                 <div class="contentCircle">
                                    <div class="CirItem title-box active CirItem1">
                                       <h2 class="title"><span>Html</span></h2>
                                       <p>Html is the standard markup language.With HTML you can create your own Website.</p>

                                    </div>
                                    <div class="CirItem title-box  CirItem2">
                                       <h2 class="title"><span>Python</span></h2>
                                       <p>Python is an interpreted high-level general-purpose programming language. </p>

                                    </div>
                                    <div class="CirItem title-box  CirItem3">
                                       <h2 class="title"><span>C sharp</span></h2>
                                       <p>C# is used to develop web apps, desktop apps, mobile apps, games and much more.
                                          It runs on the .NET Framework.

                                       </p>

                                    </div>
                                    <div class="CirItem title-box CirItem4">
                                       <h2 class="title"><span>React js </span></h2>
                                       <p>
                                          React is a JavaScript library for building user interfaces.

                                          React allows us to create reusable UI components.
                                       </p>

                                    </div>
                                    <div class="CirItem title-box CirItem5">
                                       <h2 class="title"><span>Java</span></h2>
                                       <p>Java is a high-level, class-based, object-oriented programming language.</p>

                                    </div>
                                    <div class="CirItem title-box CirItem6">
                                       <h2 class="title"><span>Javascript</span></h2>
                                       <p>JavaScript is a programming language used in client-side and server-side that allows you to make web pages interactive. </p>

                                    </div>
                                    <div class="CirItem title-box CirItem7">
                                       <h2 class="title"><span>Angularjs</span></h2>
                                       <p>AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications.</p>

                                    </div>
                                    <div class="CirItem title-box CirItem8">
                                       <h2 class="title"><span>Database</span></h2>
                                       <p>A database is an organized collection of structured information typically stored electronically in a computer system.</p>

                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>

                  </div>
               </div>

            </div>

         </div>
        <div>
           <img src={path} className="wave" />
        </div>
      </Fragment>
   )
}

export default MainScreen