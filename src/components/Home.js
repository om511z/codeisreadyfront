import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import csharp from '../icons/csharp.svg'
import html from '../icons/html.svg'
import java from '../icons/java.svg'
import '../components/Homecss.css'
import { getcsharpProjects, getcsharpvisitors } from '../actions/CsharpActions'
import { useDispatch, useSelector } from 'react-redux'
import { gethtmlvisitors,gethtmlProjects } from '../actions/HtmlActions'
import { getjavavisitors,getjavaProjects } from '../actions/JavaActions'
import Loader from './Loader'
const Home = () => {
  const dispatch = useDispatch();

  const { projects,loading } = useSelector(state => state.csharpprojects)
  const { csharpvisit } = useSelector(state => state.csharpvisit)
  const { htmlvisit } = useSelector(state => state.htmlvisit)
  const {htmlprojects} = useSelector(state=>state.htmlprojects)
  const { javavisit } = useSelector(state => state.javavisit)
  
  const { project } = useSelector(state => state.javaproject)
  useEffect(() => {
    dispatch(getcsharpProjects())
    dispatch(getcsharpvisitors())
    dispatch(gethtmlvisitors())
    dispatch(gethtmlProjects())
    dispatch(getjavavisitors())
    dispatch(getjavaProjects())
  }, [dispatch])
  return (
    <Fragment>


     
<section id="mainpage">
<div className="mainpage MainContainer">

  <div className="main-bottom">

    <div className="main-item" data-aos="fade-up">
      <Link to='/html'>
        <div ><img className="icon1" src={html} alt='' /></div>
        <h2>HTML CSS Javascript</h2>

      </Link>

      <div className='view'>

        <div className='view1'> <p>{htmlvisit.count}</p><h1>Views</h1> </div>

        <div className='view2'> <p>{htmlprojects && htmlprojects.length}</p> <h1>Projects</h1></div>

      </div>

    </div>

    <div className="main-item" data-aos="fade-up">
      <Link to='/csharp'>
        <div ><img className="icon2" src={csharp} alt='' /></div>
        <div className='lang'>
          <h2>C Sharp(#)</h2>
        </div>


      </Link>
      <div className='view'>
        <div className='view1'> <p>{csharpvisit.count}</p> <h1>Views</h1></div>
        <div className='view2'> <p>{projects && projects.length}</p> <h1>Projects</h1></div>

      </div>
    </div>
    <div className="main-item" data-aos="fade-up">
      <Link to='/java'>
        <div> <img className="icon" src={java} alt='' /></div>
        <div className='lang2'>
          <h2>java</h2>
        </div>

      </Link>
      <div className='view'>
        <div className='view1'> <p>{javavisit.count}</p> <h1>Views</h1></div>
        <div className='view2'> <p>{project && project.length}</p> <h1>Projects</h1></div>

      </div>
    </div>
    <div className="main-item" data-aos="fade-up">
      <Link to='/'>
        <div ><img className="iconphp" src="https://www.php.net/images/logos/new-php-logo.svg" alt='' /></div>
        <div className='lang2'>
          <h2>php</h2>
        </div>

      </Link>
      <div className='view'>
        <div className='view1'> <p>0</p> <h1>Views</h1></div>
        <div className='view2'> <p>0</p> <h1>Projects</h1></div>

      </div>
    </div>
  </div>
</div>
</section>
   




    </Fragment>

  )
}

export default Home