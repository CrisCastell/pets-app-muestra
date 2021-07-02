import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

function LoginForm({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    serverError,
    serverErrorMessage,
    loading
  }){
    const success = useSelector(state => state.authReducer.loginSuccess)

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
                <input
                    type="email"
                    className="input-form"
                    id="username"
                    placeholder="Tu Correo Electrónico"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    required
                    minLength={5}
                />
                {touched.username && errors.username ? 
                
                <div className="alert alert-warning">{touched.username && errors.username}</div>
            
                :
                null
                }
                
            </div>
            <div className="form-group">
                
                <input
                    type="password"
                    className="input-form"
                    id="password"
                    placeholder="Contraseña"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    minLength={5}
                    required
                />
                {touched.password && errors.password ?
                
                <div className="alert alert-warning">{touched.password && errors.password}</div>
                :
                null}
                
            </div>
            {loading ?  <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
            : null }
            { success && <div className="alert alert-success">Inicio de sesión exitoso</div> } 

            { serverError ? <div className="alert alert-danger login-error">Error: {serverErrorMessage}</div> : null }
                <button
                    type="submit" 
                    className="btn bg-success text-light btn-login"
                    disabled={loading || Object.keys(touched).length === 0 || Object.keys(errors).length !== 0 }>

                    Ingresar
                </button>

            
        </form>
    )
}

export default LoginForm
