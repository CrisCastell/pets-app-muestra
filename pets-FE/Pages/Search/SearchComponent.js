import React from 'react'
import { useHistory } from "react-router-dom";
import SearchBar from './SearchBar';

const SearchComponent = () => {

    let history = useHistory();
    
    // const categories = ['ayuda', 'adoptar', 'compañia']
    const categories = [ 'adoptar']
    const tipos = ['perro', 'gato']

    const submitHandler = (e) => {
        e.preventDefault()
        
        // const lugar = e.target.lugar.value.toLowerCase().replaceAll(' ', '-')
        const category = e.target.categoria.value.toLowerCase().replaceAll(' ', '-')
        const tipo= e.target.tipo.value.toLowerCase().replaceAll(' ', '-')
        
        let url = ''
        url = url + (tipo     !== '' ? `tipo=${tipo}` : '')
        url = url + (category !== '' ? `&category=${category}` : '')
        // url = url + (lugar    !== '' ? `&lugar=${lugar}` : '')
        history.push(`/busqueda?${url}`)
    }

    return(
        <div className="search-component">
            <form onSubmit={submitHandler}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">

                            <SearchBar />

                            
                        </div>
                        <div className="col-sm-3">
                            <select  id="categoria" name="categoria">
                                <option  value="">¿Que quieres buscar?</option>
                                {categories.map((cat, index) =>

                                    <option key={index} value={cat}>{cat} </option>

                                    // <option key={cat.id} value={cat.id}
                                    // >{cat.title}</option>
                                
                                )}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <select  id="tipo" name="tipo">
                                <option  value="">¿Gatos o perros?</option>

                                {tipos.map((tipo, index) =>

                                    <option key={index} value={tipo}>{tipo}</option>
                                    // <option key={tipo.id} value={tipo.id}
                                    // >{tipo.title}</option>
                                
                                )}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-dark text-light" type="submit">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchComponent