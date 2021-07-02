import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import DefaultImage from '../DefaultImage';
import { getUserBasicInfoAction } from '../../../Actions/userActions';

function NavContent({openLogin, fromDinamic}) {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    const userBasicInfo = useSelector(state => state.userReducer.userBasicInfo)

    const openModalAuth = () => {
        openLogin()
    }

    useEffect(()=>{
        if(!isLoggedIn || 'username' in userBasicInfo ) return
        console.log('Esta repitiendo el getUserBasicInfo')

        const getUserBasicInfo = () => dispatch(getUserBasicInfoAction())
        getUserBasicInfo()
    }, [isLoggedIn])

    


    return (
        <div className={`container navbar-content d-flex justify-content-between`}>
            <Link to="">
                <div className="logo-box">
                    <div className=" logo icon"></div>
                    <h2>Pet</h2>
                </div>
                
            </Link>
            <Dropdown>
                <Dropdown.Toggle variant="light" className="d-flex align-items-center" id="dropdown-basic">
                    <div className="default-profile-pic-wrapper">
                    {
                        isLoggedIn ? <DefaultImage /> : <div className="icon logo"></div>
                    }
                    </div>
                    
                </Dropdown.Toggle>

                {!isLoggedIn ?
                    <Dropdown.Menu>
                        <Link className="dropdown-item" to="/busqueda">
                            Busqueda
                        </Link>
                        <Dropdown.Item onClick={openModalAuth}>Iniciar Sesión</Dropdown.Item>
                        <Dropdown.Item onClick={openModalAuth}>Registrarse</Dropdown.Item>
                    </Dropdown.Menu>
                
                :
                    <Dropdown.Menu>

                        <div className="ps-4 pe-4 mb-2" >
                            {userBasicInfo && `Hola, ${userBasicInfo.username}`}
                        </div>
                        <Dropdown.Divider />
                        <Link className="dropdown-item" to="/busqueda">
                            Busqueda
                        </Link>
                        
                        <Link className="dropdown-item" to="/dashboard">
                            Ir al Panel
                        </Link>
                        
                        <Link className="dropdown-item" to="/configuracion">
                            Configuración
                        </Link>
                            
                        <Dropdown.Item href="/logout">Cerrar sesión</Dropdown.Item>
                    </Dropdown.Menu>

                }
            </Dropdown>
            
        </div>
    )
}

export default NavContent
