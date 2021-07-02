import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AuthFormik from './AuthFormik'
import {loginValidate, loginInitialValues, registerInitialValues, registerValidate} from './authFunctions'
import { useHistory } from 'react-router'
import * as actions from '../../Actions/authActions'

function AuthPage({handleModalClose}) {

    const dispatch = useDispatch()

    const history = useHistory()

    const [isRegister, setIsRegister] = useState(false)

    const handleAuthChange = () => setIsRegister(!isRegister)


    const handleSubmit = (values) => {
        if(isRegister){

            console.log(values)
            dispatch(actions.registrationAction(values))
            
            
        } else {
            
            dispatch(actions.loginAction(values))
            setTimeout(()=>{
                dispatch(actions.loginSuccessToFalse())
                handleModalClose()
            }, 1500)
        }
        
    }


    const error        = useSelector(state => state.authReducer.error)
    const errorMessage = useSelector(state => state.authReducer.errorMessage)
    const loading      = useSelector(state => state.authReducer.loading)
    const isLoggedIn   = useSelector(state => state.authReducer.isLoggedIn )
    const loginSuccess = useSelector(state => state.authReducer.loginSuccess)
    
    useEffect(() => {
        if (isLoggedIn === true ) {
            console.log('Si funciona')
            history.push("/dashboard")
        } else {
            dispatch(actions.checkIfLogged())
        }
    }, [isLoggedIn])



    return (
        <>
            <h3 className="mb-4 container text-center">Inicio de sesión / Registro</h3>
            
            <AuthFormik 
                initialValues={isRegister ?    registerInitialValues : loginInitialValues} 
                validate={isRegister ?  registerValidate : loginValidate} 
                fromRegister={isRegister}
                serverError={error}
                serverErrorMessage={errorMessage}
                success={loginSuccess}
                loading={loading}
                handleSubmit={handleSubmit} /> 


            <button className="toggle-auth" onClick={handleAuthChange}>
                {isRegister ? "¿Ya posees una cuenta? Inicia Sesión" : "¿Aún no tienes una cuenta? ¡Registrate!"}
            </button>
        </>
    )
}

export default AuthPage
