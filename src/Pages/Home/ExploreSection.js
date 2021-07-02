import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { exploreOption } from '../../Utils/Constants'

const ExploreSection = ({handleModalOpen, authenticated}) => {
    
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

    return(
        <>
        <div className="row">
            {exploreOption.map((option, index)=>

            <div key={index} className="col-sm-6">
                <Link to={option.url}>
                    <div className="explore-option">
                        <div className="img-wrapper">
                            <img src={option.image} alt="pets" />
                        </div>
                        <div className="option-text">
                            <h6>{option.title}</h6>
                            <p>{option.text} </p>
                        </div>
                        
                    </div>
                </Link> 
            </div>
            
            )}

            <div className="col-sm-6">
                {isLoggedIn ?
                    <Link to="/dashboard">
                        <div className="explore-option">
                            <div className="img-wrapper">
                                <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1150&q=80" 
                                alt="pets" />
                            </div>
                            <div className="option-text">
                                <h6>Da en adopción</h6>
                                <p>Hay una persona ahí afuera esperando dar cariño.</p>
                            </div>
                            
                        </div>
                    </Link>
                    :
                <a onClick={handleModalOpen}>
                    <div className="explore-option">
                        <div className="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1150&q=80" 
                            alt="pets" />
                        </div>
                        <div className="option-text">
                            <h6>Da en adopción</h6>
                            <p>Hay una persona ahí afuera esperando dar cariño.</p>
                        </div>
                        
                    </div>
                </a> 
                }
            </div>
        </div>
        

        </>
    )
}

export default ExploreSection