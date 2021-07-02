import React from 'react';
import { withFormik } from 'formik';
// import {handleSubmitFunc} from './utilFunctions'

function MyForm({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        serverError,
        serverErrorMessage,
        loading,
        dataArray,
        allFieldsPassword
    }) {

    return (
        
            <form className="global-form" onSubmit={handleSubmit}>
                {dataArray.map(elem => 
                    <div key={elem}  className="form-group">

                        <label htmlFor={elem}>{elem.replace('_', ' ')}</label>

                    
                        <input 
                            type={allFieldsPassword ? "password" : "text"}
                            className="form-control form-input" 
                            id={elem}
                            placeholder={elem.replace('_', ' ')}
                            value={values[elem]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name={elem}
                            />
                        {touched[elem] && errors[elem]? 
                        
                        <div className="alert alert-warning">{touched[elem] && errors[elem]}</div>
                    
                        :
                        null
                        }
                        

                    </div>
                    )}

                <button type="submit">Enter</button>
            
            </form>
    );
}

const GlobalFormik = withFormik({
    mapPropsToValues: ({ initialValues }) => {
        return {
        ...initialValues,
        };
    },

    validate: (values, { validate }) =>
        Object.keys(values).reduce((errors, field) => {
        const error = validate[field](values[field]);
        return {
            ...errors,
            ...(error && { [field]: error }),
        };
        }, {}),

    handleSubmit: (values, { setSubmitting, props }) => {
        props.handleSubmit(values)
        setSubmitting(false)
    },

    validateOnChange: true,

    displayName: 'LoginFormik',
})(MyForm);

export default GlobalFormik;