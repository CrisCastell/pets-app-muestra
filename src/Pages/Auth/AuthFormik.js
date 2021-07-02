import React from 'react';
import { withFormik } from 'formik';
import RegisterForm from './RegisterForm';
// import {handleSubmitFunc} from './utilFunctions'
import LoginForm from './LoginForm'
function MyForm({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        fromRegister,
        serverError,
        serverErrorMessage,
        loading,
    }) {
    return (
        
            <>
                {fromRegister ? 
                <RegisterForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    touched={touched}
                    values={values}
                    serverError={serverError}
                    serverErrorMessage={serverErrorMessage}
                    loading={loading}
                />

                :
                <LoginForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    touched={touched}
                    values={values}
                    serverError={serverError}
                    serverErrorMessage={serverErrorMessage}
                    loading={loading}
                />
            
                }
                
            </>
    );
}

const LoginFormik = withFormik({
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

export default LoginFormik;