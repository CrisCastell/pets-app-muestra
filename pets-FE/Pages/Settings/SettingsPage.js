import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { checkIfLogged } from '../../Actions/authActions'
import {getUserIDAction} from '../../Actions/userActions'
import { Route, Link, Switch } from 'react-router-dom'
import EditImage from './EditImage'
import AccountInfo from './AccountInfo'
import Seguridad from './Seguridad'
import useWindowSize from '../../Utils/useWindowResize'
import DefaultSettings from './DefaultSettings'

const SettingsPage = (props) => {
    
    const {match} = props
    const history = useHistory()
    const dispatch = useDispatch()
    const [isConfirmado, setIsConfirmado] = useState(false)
    const windowSize = useWindowSize()

    const isLoggedIn   = useSelector(state => state.authReducer.isLoggedIn )

    useEffect(() => {
        if (isLoggedIn === true )  return 

        if(!isLoggedIn && !isConfirmado) {
            console.log('esta pasando por aca')
            dispatch(checkIfLogged())
            setIsConfirmado(true)
        } else {
            history.push('/')
        }
    }, [isLoggedIn, isConfirmado])


    useEffect(()=>{
        const getUserID = () => dispatch(getUserIDAction())
        getUserID()
    }, [])

   
   
    const userID = useSelector(state => state.userReducer.userID)
    const navLinksArray = ['cuenta', 'seguridad', 'imagen-de-perfil' ]
    
    return(
        <div className="container  custom-container">
            <div className="settings-page">

                <h2>Configuraciones</h2>

                <div className="settings-box">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 nav-wrapper">

                            <nav className="" >

                                {navLinksArray.map((elem, index)=> 
                                    <Link key={index}  to={`${match.path}/${elem}`}
                                        className={props.location.pathname.replace(match.path, '') === ("/" + elem) ? "current" : ""} >
                                        <div className={`icon small-icon ${elem}`}></div>
                                        <span className={windowSize.width < 768 ? "sr-only" : ""}>
                                            {elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase().replaceAll('-', ' ')}
                                        </span>
                                        
                                            
                                    </Link>
                                )}
                            
                            </nav>

                        </div>
                        <div className="col-md-8 col-sm-12  content-wrapper">
                        <Switch>
                            <Route exact path={`${match.path}`}         render={()=> <DefaultSettings />}  />
                            <Route path={`${match.path}/cuenta`}         render={()=> <AccountInfo userID={userID} />}  />
                            <Route path={`${match.path}/seguridad`}       render={()=> <Seguridad userID={userID} />}  />
                            <Route path={`${match.path}/imagen-de-perfil`}     render={()=> <EditImage /> } /> 

                        </Switch>
                            
                        </div>
                        

                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}

export default SettingsPage