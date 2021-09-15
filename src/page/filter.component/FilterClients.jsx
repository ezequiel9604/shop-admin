
import { Component } from "react";
import { Link } from "react-router-dom";

import './css-styles/styles.css';

class FilterClients extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            isFilter2Open: false
        }

        this.switchFilter2Open = this.switchFilter2Open.bind(this);
    }

    switchFilter2Open(){
        this.setState((state)=> ({
            isFilter2Open: !state.isFilter2Open
        }));
    }

    render() { 

        const {isFilter2Open} = this.state;

        return (  
            <div className="box-container">
	
                <div className="box box-filter">
                    
                    <div className="filter-1">
                        <div>
                            <select name="" id="">
                                <option defaultValue="">Codigo</option>
                                <option defaultValue="">Nombre</option>
                                <option defaultValue="">Email</option>
                            </select>
                            <input type="text" placeholder="Codigo, Email, Nombre ..."/>
                            <button type="button">Buscar</button>
                        </div>
                        <Link to='/addUser'>+ Agregar usuario</Link>
                    </div>
                    <button onClick={this.switchFilter2Open} id="btn-filter-advance">
                        Opciones avanzadas
                        <span className="material-icons-outlined">
                            {(isFilter2Open)? 'expand_less':'expand_more'}
                        </span>
                    </button>

                    <div style={(isFilter2Open)? {display:'flex'}:{display:'none'}}
                        className="filter-2">
                        <div>
                            <h4>Genero:</h4>
                            <label htmlFor="male-gender-1">
                                <input type="checkbox" id="male-gender-1" /> Hombre
                            </label>
                            <label htmlFor="female-gender-1">
                                <input type="checkbox" id="female-gender-1" /> Mujer
                            </label>
                        </div>
                        <div>
                            <h4>Estado:</h4>
                            <label htmlFor="connected-status-1">
                                <input type="checkbox" id="connected-status-1" /> Conectado
                            </label>
                            <label htmlFor="suspended-status-1">
                                <input type="checkbox" id="suspended-status-1" /> Suspendido
                            </label>
                            <label htmlFor="offline-status-1">
                                <input type="checkbox" id="offline-status-1" /> Fuera de linea
                            </label>
                            <label htmlFor="retired-status-1">
                                <input type="checkbox" id="retired-status-1" /> Retirados
                            </label>
                        </div>
                        <div>
                            <h4>Edad:</h4>
                            <label htmlFor="18-25-age-1">
                                <input type="checkbox" id="18-25-age-1" /> 18 - 25
                            </label>
                            <label htmlFor="26-35-age-1">
                                <input type="checkbox" id="26-35-age-1" /> 26 - 35
                            </label>
                            <label htmlFor="36-45-age-1">
                                <input type="checkbox" id="36-45-age-1" /> 36 - 45
                            </label>
                            <label htmlFor="46+-age-1">
                                <input type="checkbox" id="46+-age-1" /> 46+
                            </label>
                        </div>
                        <div>
                            <h4>Locación:</h4>
                            <label htmlFor="city1-address-1">
                                <input type="checkbox" id="city1-address-1" /> Barrio 1
                            </label>
                            <label htmlFor="city2-address-1">
                                <input type="checkbox" id="city2-address-1" /> Barrio 2
                            </label>
                            <label htmlFor="city3-address-1">
                                <input type="checkbox" id="city3-address-1" /> Barrio 3
                            </label>
                            <label htmlFor="city4-address-1">
                                <input type="checkbox" id="city4-address-1" /> Barrio 4
                            </label>
                        </div>
                        <div>
                            <h4>Tipo:</h4>
                            <label htmlFor="normal-type-1">
                                <input type="checkbox" id="normal-type-1" /> Normal
                            </label>
                            <label htmlFor="express-type-1">
                                <input type="checkbox" id="express-type-1" /> Expreso
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default FilterClients;