import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import PostImageCarousel from './PostImageCarousel'
import { images } from '../../Utils/Constants'


function PostDetailImages({mainImage}) {

    // const windowSize = useWindowSize()

    const [show, handleShow] = useState(false)



    const seeMoreImages       = () => handleShow(true)
    const handleCloseImages   = () => handleShow(false)


    const ImageUnique = ({mainImage}) => {
        return(
            <>
            <div className="col-md-6 custom-no-padding main-img-wrapper">
                <img 
                    src={mainImage}
                    alt="imagen detail" />
                
                </div>
            </>
        )
    }
    
    const ImagesDos = ({mainImage, firstImg}) => {
        return(
            <>
            <div className="col-md-6 custom-no-padding main-img-wrapper">
                <img 
                src={mainImage}
                alt="imagen detail" />
            </div>
            <div className="col-md-6 secondary-img-wrapper">
                <img 
                src={firstImg}
                alt="imagen detail" />
            </div>
            </>
        )
    }



    const ImagesTres = ({mainImage, firstImg, secondImg}) => {
        console.log(firstImg)
        return(
            <>
            
            <div className="col-md-6 custom-no-padding main-img-wrapper">
                <button onClick={seeMoreImages}>
                    <img 
                    src={mainImage}
                    alt="imagen detail" />
                </button>
                
            </div>
            <div className="col-md-6 custom-no-padding">
                <div className="row">
                    <div className="col-md-12 col-sm-6 col-6 secondary-img-wrapper up">
                        <button onClick={seeMoreImages}>
                            <img 
                            src={firstImg.image}
                            alt="imagen detail" />
                        </button>
                    </div>
                    <div className="col-md-12 col-sm-6 col-6 secondary-img-wrapper more-images">
                        <button onClick={seeMoreImages}>
                            <div className="more-images-message">

                                <p>Ver todas las imagenes</p>

                            </div>
                            <img 
                            src={secondImg.image}
                            alt="imagen detail" />
                        </button>
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
                       

    function imageBoxes(mainImage, imagesLength, images){
        console.log('se esta ejecutando')
        console.log(imagesLength)
        switch(imagesLength){
            case imagesLength === 0:
                return <ImageUnique />

            case imagesLength === 1:
                return <ImagesDos mainImage={mainImage} firstImg={images[0]} />

            default:
                return (
                <ImagesTres 
                    mainImage={mainImage} 
                    firstImg={images[0]} 
                    secondImg={images[1]} 
                    imagesLength={imagesLength} />
                )
        }
    }

    
    return (
        <>
        <Modal 
            show={show} 
            onHide={handleCloseImages}
            aria-labelledby="contained-modal-title-vcenter-lg"
            centered
            size="lg" 
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <PostImageCarousel mainImage={mainImage} images={images} />
            </Modal.Body>
            
        </Modal>
        <div className="container custom-no-padding post-detail-images">
            <div className="row "> 


                {mainImage ? imageBoxes(mainImage, images.length, images) : null}
                {/* <div className="col-md-6 custom-no-padding main-img-wrapper">
                    {mainImage ? <img 
                    src={mainImage}
                    alt="imagen detail" />
                : null}
                </div>
                <div className="col-md-6 custom-no-padding">
                    <div className="row">
                        <div className="col-md-12 col-sm-6 col-6 secondary-img-wrapper up">
                            <img 
                            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                            alt="imagen detail" />
                        </div>
                        <div className="col-md-12 col-sm-6 col-6 secondary-img-wrapper more-images">
                            <button onClick={seeMoreImages}>
                                <div className="more-images-message">

                                    <p>{images}+</p>

                                </div>
                                <img 
                                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                                alt="imagen detail" />
                            </button>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default PostDetailImages
