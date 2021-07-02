import React from 'react'
import CardInfo from './CardInfo'
import Map from '../Search/Map'
// import {post} from '../../Utils/Constants'

function PostDetailInfo({post}) {
    return (
        <div className="container post-detail-info">
            <div className="row post-detail-row">
                <div className="custom-no-padding post-info-text col-md-8 pe-3">
                    
                    <div>
                        
                        <div className="row ">
                            <div className="col-md-4 custom-no-padding">
                                <div>
                                    <strong>Fecha de publicacion:</strong>
                                    <p>{post.fecha}</p>
                                </div>
                            </div>
                            <div className="col-md-4 custom-no-padding">
                                <div>
                                    <strong>Ubicación:</strong>
                                    <p>{post.locacion ? post.locacion.titulo : ""} </p>
                                </div>
                            </div>
                            <div className="col-md-4 custom-no-padding">
                                <div>
                                    <strong>Publicado por:</strong>
                                    <div className="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1551085254-e96b210db58a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=586&q=80"
                                        className="rounded-circle profile-img" 
                                        alt="Crsitiam Castellanos" />
                                        <p className="mb-0 ms-3">{post.author ? post.author.username : ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description-wrapper">
                        
                        <h4>Descripción</h4>
                        <p>{post.descripcion}</p>
                    </div>

                    <div className="container-fluid information-box custom-no-padding">
                        <h4 className="mar-btm">Informacion sobre {post.nombre_mascota}</h4>
                        <div className="row">
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Raza:</h6>
                                    <p>{post.raza} </p>
                                </div>

                            </div>
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Edad:</h6>
                                    <p>{post.edad_number} {post.edad_unidad} </p>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Vacunas:</h6>
                                    <p>{post.vacunas} </p>
                                </div>

                            </div>
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Caracteristicas principales:</h6>
                                    <p>{post.caracteristicas} </p>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Interacción con otras mascotas:</h6>
                                    <p>{post.interaccion_mascotas}</p>
                                </div>

                            </div>
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Interacción con las personas:</h6>
                                    <p>{post.interaccion_personas} </p>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Esteril:</h6>
                                    <p>{post.esteril ? "Si" : "No"} </p>
                                </div>

                            </div>
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    
                                    {post.motivo_adopcion ? (
                                        <>
                                        <h6>Motivo de la adopción:</h6>
                                        <p>{post.motivo_adopcion_text} </p>
                                        </>
                                    ): null}
                                    
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mar-btm custom-no-padding col-sm-6 col-md-6">
                                <div>
                                    <h6>Salud:</h6>
                                    <p>{post.salud} </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <div className="border border-dark" style={{height:"500px", width:"500px"}}>
                            <MyMapComponent />
                        </div>
                    </div> */}
                    <div className="container map-container custom-no-padding">
                        <Map petLocacion={post.locacion} />
                    </div>
                    
                </div>
                <div className="card-info-wrapper custom-no-padding col-md-4">
                    <CardInfo />
                </div>
            
            </div>
        </div>
    )
}

export default PostDetailInfo
