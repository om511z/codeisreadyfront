import React,{Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getjavaProjects } from '../actions/JavaActions'
import Loader from '../components/Loader'
const Javaproject = () => {
    const dispatch = useDispatch();

    const { loading, project, error } = useSelector(state => state.javaproject)
    useEffect(() => {
      dispatch(getjavaProjects());
    }, [dispatch])
  return (
    <Fragment>
      {loading ? <Loader/> : (
        <section >
 <div className='sp'>
    <div className="container py-md-5 py-4 ">

      <div className="row">
        {project && project.map((projects, index) => (
          <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up">

            <div className="main" >
              <div>
                <Link to={`/java/projects/javadetails/${projects._id}`} >
                  <img src={projects.mainimg.url} className="img-fluid image" alt="" />
                </Link>
              </div>
            </div>
            <div> <Link to={`/java/projects/javadetails/${projects._id}`} > <h2 className="mt-2 color">{projects.projectname}</h2></Link></div>

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

export default Javaproject