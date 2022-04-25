import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getJavaDetailsProject } from '../actions/JavaActions'
import VideoPlayer from 'react-video-js-player'
import Loader from '../components/Loader'

const JavaDetails = () => {

     
    const dispatch = useDispatch();

    const { loading, Javaproduct } = useSelector(state => state.JavaDetail)

    const { id } = useParams();

    useEffect(() => {
        dispatch(getJavaDetailsProject(id));


    }, [dispatch, id])
  return (
    <Fragment>
        <div className='sp'>

    {loading ? <Loader/> : (
        <Fragment>

            <section >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <VideoPlayer src={Javaproduct.viewdemolink} className='box-detail' heigth='200' width='100%' />
                        </div>
                        <div className="col-lg-6">
                            <table className="table tablemargin">
                                <thead>
                                    <tr>
                                        <th scope="col"><h2>Project Name :</h2></th>
                                        <th scope="col">{Javaproduct.projectname}</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col"><h2>Frontend used:</h2></th>
                                        <th scope="col">{Javaproduct.frontend}</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col"><h2>Backend used:</h2></th>
                                        <th scope="col">{Javaproduct.backend}</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col"><h2>Contact No :</h2></th>
                                        <th scope="col">{Javaproduct.contactno}</th>
                                    </tr>
                                </thead>
                               
                                <thead>
                                    <tr>
                                        <th scope="col"><h2>Project:</h2></th>
                                        <th scope="col">With Source Code and documentation</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col"><h2>Price:</h2></th>
                                        <th scope="col">{Javaproduct.price} Rs</th>
                                    </tr>
                                </thead>

                            </table>

                        </div>

                    </div>


                </div>
            </section>
            <hr></hr>

            <div className="back">

                <details className="text">
                    <summary className="summ">Details</summary>
                    <section >

                        <hr></hr>
                        <div className="container py-md-5">

                            <div className="row">

                                <div className="info">

                                    <p className="my-4">{Javaproduct.description}</p>



                                </div>

                            </div>
                        </div>
                    </section>

                </details>
                <br></br><br></br>

            </div>



        </Fragment>
    )}


   
</div>
</Fragment>
  )
}

export default JavaDetails