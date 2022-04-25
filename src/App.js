
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Main from './java/Main';
import Csharpmain from './Csharp/Csharpmain';
import Htmlmain from './HTMLCSSJavaScript/Htmlmain';
import CsharpProjects from './Csharp/CsharpProjects';
import Csharpdetails from './Csharp/Csharpdetails';
import Footer from './components/Footer';
import Csharpquiz from './Csharp/Csharpquiz';
import MainScreen from './components/MainScreen'
import PhpMain from './PHP/PhpMain';
import Htmlprojects from './HTMLCSSJavaScript/Htmlprojects';
import Htmldetail from './HTMLCSSJavaScript/Htmldetail';
import Htmlquiz from './HTMLCSSJavaScript/Htmlquiz';
import CsharpPrograms from './Csharp/CsharpPrograms';
import HtmlProgram from './HTMLCSSJavaScript/HtmlProgram';
import Javaproject from './java/Javaproject';
import JavaDetails from './java/JavaDetails';
import JavaQuiz from './java/JavaQuiz';
import JavaPrograms from './java/JavaPrograms';
function App() {

  return (
    <Router>
    <div className='App'>
      
      <Navbar/>
     <MainScreen path='/' />
<Routes>
{/* Home */}

<Route path='/' element={<><Home/></>} exact/>

{/* Java */}
<Route path='/java' element={<Main/>} exact />
<Route path='/java/projects' element={<Javaproject/>} exact />
<Route path='/java/projects/javadetails/:id' element={<JavaDetails/>} exact />
<Route path='/java/quiz' element={<JavaQuiz/>} exact />
<Route path='/java/program' element={<JavaPrograms/>} exact />


{/* Csharp */}
<Route path='/csharp' element={<Csharpmain/>} exact />
<Route path='/csharp/projects' element={<CsharpProjects/>} exact />
<Route path='/csharp/projects/csharpdetails/:id' element={<Csharpdetails/>} exact />
<Route path='/csharp/quiz' element={<Csharpquiz/>} exact />
<Route path='/csharp/programs' element={<CsharpPrograms/>} exact />

{/* Html css javascript */}
<Route path='/html' element={<Htmlmain/>} exact />
<Route path='/html/projects' element={<Htmlprojects/>} exact />
<Route path='/html/projects/htmldetails/:id' element={<Htmldetail/>} exact />
<Route path='/html/quiz' element={<Htmlquiz/>} exact />
<Route path='/html/program' element={<HtmlProgram/>} exact />

{/* PHP */}
<Route path='/php' element={<PhpMain/>} />
</Routes>

<Footer/>
</div>
 </Router>
 
  );
}

export default App;
