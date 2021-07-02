import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../Actions/userActions'
import {Modal} from 'react-bootstrap'
import Uploader from '../Globals/Uploader'
import {Spinner} from 'react-bootstrap'
import DefaultImage from '../Globals/DefaultImage'

const EditImage = () => {
    
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)

    useEffect(()=>{
        const getUserID = () => dispatch(actions.getUserIDAction())
        getUserID()
    }, [])

    

    

    const userImage         = useSelector(state => state.userReducer.userImage)
    const userImageLoading  = useSelector(state => state.userReducer.userImageLoading)
    const userImageError    = useSelector(state => state.userReducer.userImageError)
    const userID            = useSelector(state => state.userReducer.userID)
    const userBasicInfo     = useSelector(state => state.userReducer.userBasicInfo)
    
    const handleClose   = () => setShow(false)
    const handleShow    = () => setShow(true)


    useEffect(()=>{
        if(userID === null) return
        const getUserImage = () => dispatch(actions.getUserImageAction(userID))
        getUserImage()

    }, [userID])


    // useEffect(() => {
    //     if('username' in userBasicInfo || userID === null) return
    //     const getUserID = () => dispatch(actions.getUserBasicInfoAction())
    //     getUserID()
    //     console.log('cuantas veces pasa por aca')
        
    // }, [userBasicInfo, userID])



    const saveUserImage = (data) => {
        
        dispatch(actions.updateUserImageAction(userID, data))
        handleClose()
    }

    
    return(
        <>

            <Modal 
                show={show} 
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="edit-image"
                
                backdropClassName="no-bg"
                >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Uploader
                        userID={userID}
                        handleOnSave={saveUserImage}
                        multiple={false}
                        fieldName="profile_image"
                        className=""
                    
                    /> 
                </Modal.Body>
                
            </Modal>
        
            <div className="image-box">
                <div className="image-wrapper">
                    {userImage ? 

                    <img className="rounded-circle settings-image" src={userImage} alt="profile pic" /> 
                    
                    : 

                    <DefaultImage userBasicInfo={userBasicInfo} customClass={"big"} />

                    }
                    <button onClick={handleShow} disabled={userImageLoading} className="edit-image" data-tip data-for="edit-image">+</button>
                    {userImageLoading ? 

                        <div className="image-loading-box">
                            <Spinner animation="border" variant="light" />
                        </div>
                    
                    : null}
                </div>
            </div>
        </>
    )
}

export default EditImage