import React,{Fragment, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { gethtmlProjects } from '../actions/HtmlActions'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
const Htmlprojects = () => {
    const dispatch = useDispatch();
    const {loading,htmlprojects} = useSelector(state=>state.htmlprojects)
    useEffect(()=>{
 dispatch(gethtmlProjects())
    },[dispatch])
  return (
    <Fragment>

    {loading ? <Loader/> : (
  <section >
  <div className='sp'>
  <div className="container py-md-5 py-4 ">

    <div className="row">
      {htmlprojects && htmlprojects.map((projects, index) => (
        <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up">

          <div className="main" >
            <div>
              <Link to={`/html/projects/htmldetails/${projects._id}`} >
                <img src={projects.img1.url1} className="img-fluid image" alt="" />
              </Link>
            </div>
          </div>
          <div> <Link to={`/html/projects/htmldetails/${projects._id}`} > <h2 className="mt-2 color">{projects.projectname}</h2></Link></div>

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

export default Htmlprojects