import React from 'react'
import {useSelector} from 'react-redux'

const DefaultImage = ({customClass}) => {

    
    const userBasicInfo = useSelector(state => state.userReducer.userBasicInfo)



    



    return(
        <div className="default-profile-pic rounded-circle">
            {userBasicInfo.username && !userBasicInfo.profile_image ?<span className={customClass && customClass}>{userBasicInfo.username[0]}</span> : null }
            {userBasicInfo.profile_image ? <img className="pic" src={userBasicInfo.profile_image} /> : null }
        </div>
    )
}

export default DefaultImage