import React, { useState } from "react";
import { Link } from "react-router-dom";

function FilterInventory(props) {
  const brands = ["brand 1","brand 2","brand 3","brand 4","brand 5","brand 6"];
  const departments = ["Tecnologia", "Ferreteria", "Ropa", "Calzado", "Hogar"];

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
              <option defaultValue="">Titulo</option>
            </select>
            <input type="text" placeholder="Codigo, Titulo ..." />
            <button type="button">Buscar</button>
          </div>
          <Link to="/addItem">+ Agregar articulo</Link>
        </div>

        <button onClick={switchFilter2Open} id="btn-filter-advance">
          Opciones avanzadas
          <span className="material-icons-outlined">
            {(isFilter2Open)?'expand_less':'expand_more'}
          </span>
        </button>

        <div
          style={isFilter2Open ? { display: "flex" } : { display: "none" }}
          className="filter-2"
        >
          <div>
            <h4>Marcas:</h4>

            {brands.map((current) => {
              return (
                <label htmlFor={"brands-" + current}>
                  <input type="checkbox" id={"brands-" + current} /> {current}
                </label>
              );
            })}
          </div>
          <div>
            <h4>Departamentos:</h4>

            {departments.map((current) => {
              return (
                <label htmlFor={"department-" + current}>
                  <input type="checkbox" id={"department-" + current} /> {current}
                </label>
              );
            })}
          </div>
          <div>
            <h4>Precio:</h4>
            <label htmlFor="verylow-price-1">
              <input type="checkbox" id="verylow-price-1" /> 100-500
            </label>
            <label htmlFor="low-price-1">
              <input type="checkbox" id="low-price-1" /> 500-1000
            </label>
            <label htmlFor="expensive-price-1">
              <input type="checkbox" id="expensive-price-1" /> 1000-1500
            </label>
            <label htmlFor="veryexpensive-price-1">
              <input type="checkbox" id="veryexpensive-price-1" /> 1500+
            </label>
          </div>
          <div>
            <h4>Estado:</h4>
            <label htmlFor="new-status-1">
              <input type="checkbox" id="new-status-1" /> Nuevo
            </label>
            <label htmlFor="used-status-1">
              <input type="checkbox" id="used-status-1" /> Usado
            </label>
            <label htmlFor="repair-status-1">
              <input type="checkbox" id="repair-status-1" /> Reparado
            </label>
            <label htmlFor="oculto-status-1">
              <input type="checkbox" id="oculto-status-1" /> Oculto
            </label>
          </div>
          <div>
            <h4>Genero:</h4>
            <label htmlFor="male-gender-1">
              <input type="checkbox" id="male-gender-1" /> Hombres
            </label>
            <label htmlFor="female-gender-1">
              <input type="checkbox" id="female-gender-1" /> Mujeres
            </label>
            <label htmlFor="all-gender-1">
              <input type="checkbox" id="all-gender-1" /> Todos
            </label>
          </div>
          <div>
            <h4>Incluir oferta:</h4>
            <label htmlFor="yes-offer-1">
              <input type="radio" name="offer-1" id="yes-offer-1" /> Si
            </label>
            <label htmlFor="no-offer-1">
              <input
                type="radio"
                name="offer-1"
                id="no-offer-1"
                defaultChecked
              />{" "}
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterInventory;
