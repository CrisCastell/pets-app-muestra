import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function PostImageCarousel({mainImage, images}) {
    return (
        <div className="post-image-carousel">
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={false} autoPlay={false} >
                
                <img src={mainImage} alt="" />
                {images.map((image, index) => <img key={image.id} src={image.image} alt={`${index + 1}`} />)}
                        
                    
                </Carousel>
        </div>
    )
}

export default PostImageCarousel
