import React from 'react'

function RegisterForm({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    serverError,
    serverErrorMessage,
    loading
  }) {
    return (
            <form onSubmit={handleSubmit} autoComplete="off" className=" auth-form">
                <div className="form-group">
                    <input
                        type="text"
                        className="input-form"
                        id="username"
                        placeholder="Ingresa tu nombrbe de usuario"
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
                        type="email"
                        className="input-form"
                        id="email"
                        placeholder="Tu Correo Electrónico"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        required
                        minLength={5}
                    />
                    {touched.email && errors.email ? 
                    
                    <div className="alert alert-warning">{touched.email && errors.email}</div>
                
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

                <div className="form-group">
                    
                    <input
                        type="password"
                        className="input-form"
                        id="password2"
                        placeholder="Confirmación"
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password2"
                        minLength={5}
                        required
                    />
                    {touched.password2 && errors.password2 ?
                    
                    <div className="alert alert-warning">{touched.password2 && errors.password2}</div>
                    :
                    null}
                    
                </div>

                
                <button type="submit" className="btn bg-success text-light btn-login"
                disabled={loading || Object.keys(touched).length === 0 || Object.keys(errors).length !== 0 }  
                
                >Enviar Datos</button>
                
                
                
            </form>
            
    )
}

export default RegisterForm