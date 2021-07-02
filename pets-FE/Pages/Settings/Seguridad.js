import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../Actions/userActions'
import {Spinner} from 'react-bootstrap'

const Seguridad = ({userID}) => {


    const dispatch = useDispatch()

    const [data, setData]               = useState({old_password:"", password:"", password2:""})
    const [isDataFilled, setDataFilled] = useState({old_password:false, password:false, password2:false})


    const changePasswordError           = useSelector(state => state.userReducer.changePasswordError)
    const errorMessage                  = useSelector(state => state.userReducer.errorMessage)
    const changePasswordLoading         = useSelector(state => state.userReducer.changePasswordLoading)
    const changePasswordSuccess         = useSelector(state => state.userReducer.changePasswordSuccess)

    const onChange = (e) => {
        e.preventDefault()
        const type  = e.target.id
        const value = e.target.value
        const isFilled = value !== "" ? true : false

        const newData = { ...data}
        const newDataFilled = {...isDataFilled}
        newData[type] = value
        newDataFilled[type] = isFilled
        setData(newData)
        setDataFilled(newDataFilled)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(actions.changeUserPasswordAction(userID, data))
    }


    const spinner = <Spinner animation="border" variant="dark" />
    

    return(
        <div>
        <form className="global-form" onSubmit={handleSubmit}>

            
                <div className="form-group">

                    <label htmlFor="old_password">Current Password</label>

                    
                    <input 
                        type="password"
                        name="old_password"
                        id="old_password"
                        className="form-control form-input" 
                        onChange= { onChange }
                        placeholder="Enter your old password"
                        required="required"
                        value={data.old_password}
                        />

                </div>

                <div className="form-group">

                    <label htmlFor="password">New Password</label>

                    
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        className="form-control form-input" 
                        onChange= { onChange }
                        placeholder="Write your new password"
                        required="required"
                        value={data.password}
                        />
                    

                </div>

                <div className="form-group">

                    <label htmlFor="password2">Confirmation</label>

                    
                    <input 
                        type="password"
                        name="password2"
                        id="password2"
                        className="form-control form-input" 
                        onChange= { onChange }
                        placeholder="Confirm your new password"
                        required="required"
                        value={data.password2}
                        />

                </div>
           
            { changePasswordLoading ? <div className="container">               {spinner}</div>  : null }
            { changePasswordError   ? <div className="alert alert-danger">{errorMessage}</div> : null }
            { changePasswordSuccess ? <div className="alert alert-success">Password changed succesfully</div> : null}
                <input 
                    type="submit" 
                    className="btn btn-login"     
                    value="Save" />
        </form>
        </div>
    )
}

export default Seguridad