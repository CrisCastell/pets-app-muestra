import React from 'react'
import ExploreSection from './ExploreSection'
import StorySection from './StorySection'
import TendenciasSection from './TendenciasSection'

const Home = ({handleModalOpen, authenticated}) => {
    
    

    return(
        <>
        <section className="home home-image container-fluid custom-no-padding image-back">
            <div className="container">
                
                <div className="main-title-wrapper">
                    <div className="icon big logo"></div>
                    <h2>La felicidad está en la compañía de un pequeño amigo</h2>
                </div>
            </div>
        </section>
        <section className="home container home">
            <section>
                <div className="title-wrapper">
                    <h3>Explora diferentes topics</h3>
                </div>
                <ExploreSection handleModalOpen={handleModalOpen} authenticated={authenticated} />
            </section>
        </section>
        <section className="home stories-section container">
            <StorySection />
        </section>
        <section className="home container tendencia-section">
            <div className="title-wrapper">
                <h3>Últimas publicaciones</h3>
            </div>
            <TendenciasSection />
        </section>

        </>
    )
}

export default Home