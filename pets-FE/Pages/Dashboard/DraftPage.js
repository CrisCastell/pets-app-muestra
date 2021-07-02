import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultList from '../Search/ResultList'
import { getDraftPostsAction } from '../../Actions/postActions'

function DraftPage() {
    const dispatch   = useDispatch()
    const userID     = useSelector(state => state.postReducer.userID)
    const draftPosts = useSelector(state => state.postReducer.draftPosts)

    useEffect(()=>{
        if(userID !== null){
            const getDraftPosts = () => dispatch(getDraftPostsAction())
            getDraftPosts()
        }
    }, [])

    return (
        <div>
            <h3>Draft</h3>
            {draftPosts.length === 0 && <div className="alert alert-warning">Aun no tienes posts en borradores.</div> }

            <ResultList posts={draftPosts} />
        </div>
    )
}

export default DraftPage
