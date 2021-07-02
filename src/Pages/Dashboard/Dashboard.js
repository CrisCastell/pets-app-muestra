import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { checkIfLogged } from '../../Actions/authActions'
import {getUserIDAction} from '../../Actions/userActions'
import { Route, Link, Switch } from 'react-router-dom'
import DraftPage from './DraftPage'
import PublicPosts from './PublicPosts'
import NewPostPage from './NewPostPage'
import DashboardMessage from './DashboardMessage'
import useWindowSize from '../../Utils/useWindowResize'

const Dashboard = (props) => {
    
    const {match} = props
    const history = useHistory()
    const pathname = history.location.pathname
    const dispatch = useDispatch()
    const [isConfirmado, setIsConfirmado] = useState(false)
    const windowSize = useWindowSize()

    const isLoggedIn   = useSelector(state => state.authReducer.isLoggedIn )

    const navLinksArray = ['borradores', 'publicados', 'crear']

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
   
    console.log('Esta rebderuazando dashboard antes de moratrar lo demas')
    return(
        <div className="container custom-container">

                <h2>Panel</h2>

                
                    <div className="row">
                        <div className="col-lg-4 col-md-12 nav-wrapper">

                            <nav className="" >

                                {navLinksArray.map((elem, index)=> 

                                        <Link key={index} to={`${match.path}/${elem}`} 
                                        className={pathname.replace(match.path, '') === `/${elem}` ? "current" : ""}>
                                            <div className={`icon small-icon ${elem}`}></div>
                                            <span className={windowSize.width < 768 ? "sr-only" : ""}>
                                                {elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase().replaceAll('-', ' ')}
                                            </span>
                                        </Link>
                    
                                )}
                            
                            </nav>

                        </div>
                        <div className="col-lg-8 col-md-12 content-wrapper">

                        <Switch>
                            <Route exact path={`${match.path}`}              render={()=><DashboardMessage />} />
                            <Route path={`${match.path}/publicados`}         render={()=> <PublicPosts />}  />
                            <Route path={`${match.path}/borradores`}         render={()=> <DraftPage />}  />
                            <Route path={`${match.path}/crear`}              render={()=> <NewPostPage /> } /> 

                        </Switch>
                            
                        </div>
                        

                    </div>
            
        </div>
    )
}

export default Dashboard