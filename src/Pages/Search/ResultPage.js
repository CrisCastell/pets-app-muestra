import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation } from 'react-router'
import * as actions from '../../Actions/postActions'
import ResultList from './ResultList'
import SearchComponent from './SearchComponent'
import Map from './Map'
import { Spinner } from 'react-bootstrap'


const ResultPage = () => {

    const dispatch       = useDispatch()
    const query          = useQuery()
    const category       = query.get("category")
    const tipo           = query.get("tipo")
    const locacion       = useSelector(state => state.postReducer.locacion)

    const category_query = category ? category.toLowerCase().replaceAll(' ', '-') : ""
    const tipo_query     = tipo ? tipo.toLowerCase().replaceAll(' ', '-') : ""


    
    

    useEffect(()=>{

        if(category_query ==="" && tipo_query ==="") return
        
        const getResults = () => dispatch(actions.getAllPostsAction({category_query, tipo_query, locacion}))
        const getLocaciones = () => dispatch(actions.getAllLocacionesAction({category_query, tipo_query, locacion}))
        getResults()
        getLocaciones()

    }, [category_query, tipo_query])


    const posts      = useSelector(state=> state.postReducer.posts)
    const locaciones = useSelector(state=> state.postReducer.locaciones)

    const loading = useSelector(state=> state.postReducer.loadingPosts)
    const error   = useSelector(state=> state.postReducer.errorPosts)
    

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }


    return(
        <div className="result-page container">
            <div className="seleccion-wrapper">
                <SearchComponent />
            </div>
            <div className="container custom-no-padding">
                <div className="row cards-wrapper-parent pt-3">
                    <div className="col-lg-6 custom-no-padding">
                        {loading && 
                        <div className="loading-wrapper">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                        

                        }

                        {(category_query ==="" && tipo_query ==="" && posts.length === 0) && 
                        
                            <div className="default-result-message">
                                <div>
                                    <div className="icon logo big"></div>
                                    <h3>Busqueda</h3>
                                    <p>Acá podrás realizar tu busqueda filtrando por el tipo de mascota de tu preferencia, motivo de tu busqueda y locación.</p>
                                </div>

                            </div>
                        }   
                        {loading || error || posts.length === 0? 
                            null
                        :
                            <ResultList posts={posts} />
                        }
                        
                    </div>
                    <div className="col-lg-6 map-box pe-0">
                        <Map fromList={true}  petLocacionList={locaciones} />
                    </div>
                </div>
            </div>
        </div>
        
            
    )
}

export default ResultPage