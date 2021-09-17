import React, { useState } from "react";

import "./css-styles/styles.css";


function FilterComments(props) {
  const [isFilter2Open, setFilter2Open] = useState(false);

  function switchFilter2Open() {
    setFilter2Open(!isFilter2Open);
  }

  return (
    <div className="box-container">
      <div className="box box-filter">
        <div className="filter-1">
          <div>
            <select name="" id="">
              <option value="">Codigo</option>
              <option value="">Usuario</option>
            </select>
            <input type="text" placeholder="Codigo, Usuario ..." />
            <button type="button">Buscar</button>
          </div>
        </div>

        <button onClick={switchFilter2Open} id="btn-filter-advance">
          Opciones avanzadas
          <span className="material-icons-outlined">
            {isFilter2Open ? "expand_less" : "expand_more"}
          </span>
        </button>

        <div
          style={isFilter2Open ? { display: "flex" } : { display: "none" }}
          className="filter-2"
        >
          <div>
            <h4>Por fechas:</h4>
            <label>
              Desde: <input type="date" />
            </label>
            <label>
              Hasta: <input type="date" />
            </label>
          </div>
          <div>
            <h4>Estado:</h4>
            <label htmlFor="visible-status-1">
              <input type="checkbox" id="visible-status-1" /> Visible
            </label>
            <label htmlFor="novisible-status-1">
              <input type="checkbox" id="novisible-status-1" /> No visible
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterComments;
