import React from 'react'
import useWindowSize from '../../Utils/useWindowResize'

function CardInfo() {

    const windowSize = useWindowSize()
    const forMobile = windowSize.width < 768

    return (
        <div className="rounded resumen-card ">
            <h4>Datos generales:</h4>
            <div className="info-line">
                <div className="icon medium pet"></div>
                <div className="text">
                    <strong>Tipo de mascota:</strong>
                    <p>perro</p>
                </div>
            </div>
            <div className="info-line">
                <div className="icon medium location"></div>
                <div className="text">
                    <strong>Ubicación:</strong>
                    <p>Trigal centro</p>
                </div>
            </div>

            <div className="info-line">
                <div className="icon medium age"></div>
                <div className="text">
                    <strong>Edad:</strong>
                    <p>12 meses</p>
                </div>
            </div>            
        </div>
    )
}

export default CardInfo
