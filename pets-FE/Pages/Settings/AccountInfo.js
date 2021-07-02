import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../Actions/userActions'
import {Spinner} from 'react-bootstrap'
import GlobalFormik from '../Globals/Formik/GlobalFormik'
import {accountValidate} from '../../Utils/utilFunctions'

const AccountInfo = ({userID}) => {


    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [dataArray, setDataArray] = useState([])

    useEffect(()=>{
        const getUserInfo = () => dispatch(actions.getUserInfoDetailAction(userID))
        
        getUserInfo()
    }, [])

    



    const userInfo          = useSelector(state => state.userReducer.userInfo)
    const userInfoError     = useSelector(state => state.userReducer.userInfoError)
    const userInfoLoading   = useSelector(state => state.userReducer.userInfoLoading)


    const handleSubmit = (data) => {
        dispatch(actions.updateUserInfoDetailAction(userID, data))
    }

    useEffect(()=>{
        if(userInfo !== undefined && userInfo.email !== undefined){
            const newDataArray= Object.keys(userInfo)
            setDataArray(newDataArray)
            const newData = nullToString(userInfo, newDataArray)
            setData(newData)
            
            

        }
    }, [userInfo])

    const spinner = <Spinner animation="border" variant="dark" />

    const nullToString = (values, valuesKeys )=> {
        const obj = {}
        for(let i = 0; i < valuesKeys.length; i++){
            obj[valuesKeys[i]] = values[valuesKeys[i]] === null ? "" : values[valuesKeys[i]]

        }
        return obj
    }

    console.log(data)


    return(
        <div>
            <h3>Informacion de la cuenta</h3>
            {userInfoLoading ? spinner : null }
            {userInfoLoading || userInfoError || userInfo === {} ? null : 
            
            <GlobalFormik 
                initialValues={data} 
                validate={accountValidate} 
                serverError={userInfoError}
                serverErrorMessage={""}
                loading={userInfoLoading}
                dataArray={dataArray}
                handleSubmit={handleSubmit} /> 

            }
            
        </div>
    )
}

export default AccountInfo