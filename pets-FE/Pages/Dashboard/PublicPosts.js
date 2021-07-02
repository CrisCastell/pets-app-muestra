import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ResultList from '../Search/ResultList'
import { getPublicPostsAction } from '../../Actions/postActions'

function PublicPosts() {
    const dispatch   = useDispatch()
    const userID      = useSelector(state => state.postReducer.userID)
    const publicPosts = useSelector(state => state.postReducer.publicPosts)

    useEffect(()=>{
        if(userID !== null) {
            const getPublicPosts = () => dispatch(getPublicPostsAction())
            getPublicPosts()
        }
    }, [userID])

    return (
        <div>
            <h3>Publicaciones</h3>
            {publicPosts.length === 0 && <div className="alert alert-warning">Aun no tienes posts publicados.</div> }
            <ResultList posts={publicPosts} />
        </div>
    )
}

export default PublicPosts
