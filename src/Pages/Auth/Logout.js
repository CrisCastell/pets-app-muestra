import React, {useEffect} from 'react'
import * as Constants from '../../Utils/Constants'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { checkIfLogged } from '../../Actions/authActions'

const Logout = () => {
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(()=>{        
        signMeOut()
    }, [])

    function signMeOut() {
        localStorage.removeItem(Constants.USER_TOKEN);
        dispatch(checkIfLogged())
        history.push("/");
    }
    return (
        <div className="container">
            Logout
        </div>
    )
}


export default Logout