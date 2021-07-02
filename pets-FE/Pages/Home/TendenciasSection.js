import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Actions/postActions'
import { Spinner } from 'react-bootstrap'

const TendenciasSection = () => {
    const dispatch = useDispatch()

    const tendencias = useSelector(state => state.postReducer.tendencias)
    const loadingTendencias = useSelector(state => state.postReducer.loadingTendencias)

    useEffect(()=>{
        if(tendencias.length !== 0) return
        const getTendencias = () => dispatch(actions.getTendenciasAction())
        getTendencias()
    }, [])

    

    return(
        <div className="row">
            {tendencias.map((post, index)=>

            <div key={index} className="col-sm-4">
                
                <div className="tendencia-post">
                    <div className="img-wrapper">
                        <Link to={`/post/${post.id}`}><img src={post.imagen} alt="pets" /></Link>
                    </div>
                    <div className="tendencia-text">
                        <Link to={`/post/${post.id}`}><h5>{post.titulo}</h5></Link> 
                    </div>
                    
                </div>
                
            </div>
            
            )}

            { loadingTendencias &&
            <>

                <div className="col-sm-4">
                    
                    <div className="tendencia-post-loading">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    
                </div>
                <div className="col-sm-4">
                        
                    <div className="tendencia-post-loading">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    
                </div>
                <div className="col-sm-4">
                    
                    <div className="tendencia-post-loading">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    
                </div>
                </>
            }
        </div>
                
            
    )
}

export default TendenciasSection