import React from 'react'
import {Link} from 'react-router-dom'
import { stories } from '../../Utils/Constants'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import useWindowSize from '../../Utils/useWindowResize'

const ExploreSection = () => {


    const windowSize = useWindowSize()
    
    const PetStoryEven = ({story}) => {
        return(
            
                <div className="row pet-stories even">
                    <div className="col-sm-6 pet-stories-content custom-no-padding bg-light text-dark">
                        <div className="pet-stories-text">
                            <h4>{story.title} </h4>
                            <p>{story.body}
                            </p>
                            <Link to="/busqueda" className="btn bg-dark text-light">Conoce más historias</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 custom-no-padding">
                        <div className="pet-stories-img">
                            <img src={story.image} alt="gatito" />
                        </div>
                    </div>
                    
                </div>
        )
    }

    const PetStoryOdd = ({story}) => {
        return(
            
                <div className="row pet-stories odd">
                    <div className="col-sm-6 custom-no-padding">
                        <div className="pet-stories-img">
                            <img src={story.image} alt="gatito" />
                        </div>
                    </div>
                    <div className="col-sm-6 pet-stories-content custom-no-padding bg-dark text-light">
                        <div className="pet-stories-text">
                            <h4>{story.title} </h4>
                            <p>{story.body}
                            </p>
                            <Link to="/busqueda" className="btn bg-light text-dark">Conoce más historias</Link>
                        </div>
                    </div>
                </div>
            
        )
    }

    function ContentByStory(story, index){
        
        if((index % 2) !== 0){
            return(
                <PetStoryOdd key={index} story={story} />
            )
        } else {
            return(
                <PetStoryEven key={index} story={story} />
            )
        }
    }

    return(
        <>
            {/* <Carousel showArrows={true}  > */}
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={10000} >
                
                
            {windowSize.width > 768 ?
                stories.map((story, index)=> ContentByStory(story, index))
            :

                stories.map((story, index)=> <PetStoryOdd story={story} key={index} />)
                
            }
                    
                
            </Carousel>

        </>
    )
}

export default ExploreSection