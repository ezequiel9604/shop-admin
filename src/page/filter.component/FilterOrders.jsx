import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css-styles/styles.css";


function FilterOrders(props) {

    const [isFilter2Open, setFilter2Open] = useState(false);

  function switchFilter2Open(){
      setFilter2Open(!isFilter2Open);
  }

    return (
        <div className="box-container">
	
            <div className="box box-filter">
                
                <div className="filter-1">
                    <div>
                        <select name="" id="">
                            <option defaultValue="">Codigo</option>
                            <option defaultValue="">Email</option>
                        </select>
                        <input type="text" placeholder="Codigo, Email ..."/>
                        <button type="button">Buscar</button>
                    </div>
                    <Link to="/addOrder">+ Agregar pedido</Link>
                </div>

                <button onClick={switchFilter2Open} id="btn-filter-advance">
                    Opciones avanzadas
                    <span className="material-icons-outlined">
                        {(isFilter2Open)?'expand_less':'expand_more'}
                    </span>
                </button>

                <div style={isFilter2Open ? { display: "flex" } : { display: "none" }}
                    className="filter-2">
                    <div>
                    <h4>Por fechas:</h4>
                        <label>Desde: <input type="date" /></label>
                        <label>Hasta: <input type="date" /></label>
                    </div>
                    <div>
                        <h4>Estado:</h4>
                        <label htmlFor="gettingout-status-1">
                            <input type="checkbox" id="gettingout-status-1" /> De salida</label>
                        <label htmlFor="onitsway-status-1">
                            <input type="checkbox" id="onitsway-status-1" /> En camino</label>
                        <label htmlFor="received-status-1">
                            <input type="checkbox" id="received-status-1" /> Recibido</label>
                        <label htmlFor="canceled-status-1">
                            <input type="checkbox" id="canceled-status-1" /> Cancelado</label>
                        <label htmlFor="paymenterror-status-1">
                            <input type="checkbox" id="paymenterror-status-1" /> Error en pago</label>
                    </div>
                    <div>
                        <h4>Envio:</h4>
                        <label htmlFor="normal-ship-1"><input type="checkbox" id="normal-ship-1" /> Regular</label>
                        <label htmlFor="fast-ship-1"><input type="checkbox" id="fast-ship-1" /> Rapido</label>
                        <label htmlFor="free-ship-1"><input type="checkbox" id="free-ship-1" /> Gratis</label>
                    </div>
                    <div>
                        <h4>Locación:</h4>
                        <label htmlFor="city1-address-1"><input type="checkbox" id="city1-address-1" /> Ciudad 1</label>
                        <label htmlFor="city2-address-1"><input type="checkbox" id="city2-address-1" /> Ciudad 2</label>
                        <label htmlFor="city3-address-1"><input type="checkbox" id="city3-address-1" /> Ciudad 3</label>
                        <label htmlFor="city4-address-1"><input type="checkbox" id="city4-address-1" /> Ciudad 4</label>
                    </div>
                    <div>
                        <h4>Tipo:</h4>
                        <label htmlFor="normal-type-1"><input type="checkbox" id="normal-type-1" /> Normal</label>
                        <label htmlFor="express-type-1"><input type="checkbox" id="express-type-1" /> Expreso</label>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FilterOrders;