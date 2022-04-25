import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Csharp.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcsharpProjects } from '../actions/CsharpActions'
import Loader from '../components/Loader'

const CsharpProjects = () => {

  const dispatch = useDispatch();

  const { loading, projects, error } = useSelector(state => state.csharpprojects)
  useEffect(() => {
    dispatch(getcsharpProjects());
  }, [dispatch])

  return (
    <Fragment>

      {loading ? <Loader/> : (
 <section >
 <div className='sp'>
     <div className="container py-md-5 py-4">

       <div className="row">
         {projects && projects.map((projects, index) => (
           <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up">

             <div className="main" >
               <div>
                 <Link to={`/csharp/projects/csharpdetails/${projects._id}`} >
                   <img src={projects.img1.url1} className="img-fluid image" alt="" />
                 </Link>
               </div>
             </div>
             <div> <Link to={`/csharp/projects/csharpdetails/${projects._id}`} > <h2 className="mt-2 color">{projects.projectname}</h2></Link></div>

           </div>

         ))}
         <hr></hr>




       </div>
     </div>
     </div>
   </section>
      )}
   
    </Fragment>
  )
}

export default CsharpProjects