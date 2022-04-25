import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getcsharpDetailsProject, clearErrors } from '../actions/CsharpActions'
import VideoPlayer from 'react-video-js-player'
import './Csharp.css'
import Loader from '../components/Loader'
const Csharpdetails = () => {

    const dispatch = useDispatch();

    const { loading, product } = useSelector(state => state.CsharpDetail)

    const { id } = useParams();

    useEffect(() => {
        dispatch(getcsharpDetailsProject(id));


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
                                    <VideoPlayer src={product.videolink} className='box-detail' heigth='200' width='100%' />
                                </div>
                                <div className="col-lg-6">
                                    <table className="table tablemargin">
                                        <thead>
                                            <tr>
                                                <th scope="col"><h2>Project Name :</h2></th>
                                                <th scope="col">{product.projectname}</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h2>Frontend :</h2></th>
                                                <th scope="col">{product.frontend}</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h2>Backend :</h2></th>
                                                <th scope="col">{product.backend}</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h2>Contact No :</h2></th>
                                                <th scope="col">{product.contactno}</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h2>Project With :</h2></th>
                                                <th scope="col">Source Code & Documentation</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h2>Price :</h2></th>
                                                <th scope="col">2200 Rs</th>
                                            </tr>
                                        </thead>



                                    </table>

                                </div>

                            </div>


                        </div>
                    </section>
                    <hr></hr>

                    <div>

                        <details className="text">
                            <summary className="summ">Details</summary>
                            <section >

                                <hr></hr>
                                <div className="container py-md-5">

                                    <div className="row">

                                        <div className="info">

                                            <p className="my-4">{product.description1}</p>



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

export default Csharpdetails