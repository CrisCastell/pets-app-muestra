import React from 'react'
import SingleResult from './SingleResult'
// import { arrayPrub } from '../../Utils/Constants'

const ResultList = ({posts}) => {

    

    return(

        
            <div className="row result-list">
                {posts.map((post, index)=>
                    <div key={post.id} className="col-lg-6 custom-no-padding card-wrapper col-md-6">
                        <SingleResult post={post} />
                    </div>
                )}
                {posts.map((post, index)=>
                    <div key={post.id} className="col-lg-6 custom-no-padding card-wrapper col-md-6">
                        <SingleResult post={post} />
                    </div>
                )}
                {posts.map((post, index)=>
                    <div key={post.id} className="col-lg-6 custom-no-padding card-wrapper col-md-6">
                        <SingleResult post={post} />
                    </div>
                )}
                {posts.map((post, index)=>
                    <div key={post.id} className="col-lg-6 custom-no-padding card-wrapper col-md-6">
                        <SingleResult post={post} />
                    </div>
                )}
            </div>
    )
}

export default ResultList