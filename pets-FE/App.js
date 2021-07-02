import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import NavbarDinamic from './Pages/Globals/Nav/NavbarFade'
import Navbar from './Pages/Globals/Nav/Navbar'
import ResultPage from './Pages/Search/ResultPage';
import PostDetailPage from './Pages/Posts/PostDetailPage';
import Footer from './Pages/Globals/Nav/Footer';
import { Modal } from 'react-bootstrap';
import AuthPage from './Pages/Auth/AuthPage';
import { useHistory } from 'react-router';
import { useLoadScript } from "@react-google-maps/api"
import { checkIfLogged } from './Actions/authActions';
import Home from './Pages/Home/Home';
import SettingsPage from './Pages/Settings/SettingsPage';
import Logout from './Pages/Auth/Logout';

const libraries = ['places']

function App() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [showModal, handleShowModal] = useState(false)
    const [desdeBusqueda, setDesdeBusqueda] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

    const handleModalOpen   = () => handleShowModal(true)
    const handleModalClose  = () => handleShowModal(false)
    
    const {isLoaded, loadError} = useLoadScript({
        // googleMapsAPiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        googleMapsApiKey: "AIzaSyAlc2oFkrZ4Fi3aRuEsvA56_sAGA8OVfd4",
        libraries
    })

    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

    useEffect(()=>{
        if(isLoggedIn){
            return
        } else {
            dispatch(checkIfLogged())
        }
    }, [isLoggedIn])

    useEffect(() => {

        console.log('Esta pasando')
        
        if(history.location.pathname === "/busqueda"){
            setDesdeBusqueda(true)
        } else {
            setDesdeBusqueda(false)
        }

    }, [history.location.pathname])


    return (
        <div className="App">
            <Modal 
                show={showModal} 
                onHide={handleModalClose}
                aria-labelledby="contained-modal-title-vcenter-lg"
                centered
                >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <AuthPage handleModalClose={handleModalClose} />
                </Modal.Body>
                
            </Modal>
            <BrowserRouter>
                <NavbarDinamic    authenticated={authenticated}    openLogin={handleModalOpen} />
                <Navbar           authenticated={authenticated}    openLogin={handleModalOpen} navbarClass="default" />

                <Switch>
                    <Route exact path="/"        render={props    => <Home {...props} handleModalOpen={handleModalOpen} authenticated={authenticated} />} />
                    <Route path="/busqueda"      render={props    => <ResultPage {...props} />} />
                    <Route path="/post/:postID"  render={props    => <PostDetailPage {...props} />} />
                    <Route path="/dashboard"     render={props    => <Dashboard {...props} />} />
                    <Route path="/configuracion" render={props    => <SettingsPage {...props} />} />
                    <Route path='/logout'        render={props    => <Logout {...props} history={history} />} />
                    {/* <Route component ={NotFound}  /> */}
                </Switch>
                <Footer />
            </BrowserRouter>
            
            
        </div>
    );
}

export default App;
