import React from 'react'
import {Link} from 'react-router-dom'

const SingleResult = ({post}) => {
    return(
        
        <Link to={`/post/${post.id}`}>
            <div className="custom-no-padding mb-3 result-card">
                <img 
                    src={post.imagen} 
                    className="card-img-top p-3" alt="default" />
                <div className="card-body">
                    <h5 className="card-title">{post.titulo} </h5>
                    <p className="card-text">{post.descripcion} </p>
                    {/* <a href={post.url} target="__blank" className="btn btn-success">Entregrados</a> */}
                </div>
            </div>
        </Link>
            
    )
}

export default SingleResult