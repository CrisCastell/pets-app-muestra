import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import PostDetailImages from './PostDetailImages'
import PostDetailInfo from './PostDetailInfo'
import * as actions from '../../Actions/postActions'

function PostDetailPage() {

    const dispatch = useDispatch()
    const parameters = useParams()
    const postID = parameters.postID

    useEffect(() => {
        const getPostDetail = () => dispatch(actions.getPostDetailAction(postID))
        getPostDetail()
        
    }, [])
    
    const post = useSelector(state => state.postReducer.post)

    return (
        <div className="container post-detail ">
            {/* {post.title        ? <h2>{post.title}</h2> : null}
            {post.description  ? <p>{post.description} </p> : null} */}
            <h2>Sznaucer en adopción</h2>
            {/* <h3>{post.titulo}</h3> */}
            <PostDetailImages mainImage={post.imagen} />
            <PostDetailInfo post={post} />
        </div>
    )
}

export default PostDetailPage
