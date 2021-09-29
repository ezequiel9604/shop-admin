import React, { useState } from "react";
import Filter from "./Filter";

import "./css-styles/styles.css";

function FilterOrders(props) {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const [statusInput, setStatusInput] = useState(null);
  const [shippingInput, setShippingInput] = useState(null);
  const [typeInput, setTypeInput] = useState(null);

  function filterOpenHandler() {
    setFilterOpen(!isFilterOpen);
  }

  function changeStatusInput(event) {
    setStatusInput(event.target.checked ? event.target.value : null);
  }

  function changeShippingInput(event) {
    setShippingInput(event.target.checked ? event.target.value : null);
  }

  function changeTypeInput(event) {
    setTypeInput(event.target.checked ? event.target.value : null);
  }

  function searchData(data) {
    data.status = statusInput;
    data.shipping = shippingInput;
    data.type = typeInput;

    props.onSearchDataToFilter(data);
  }

  return (
    <div className="box-container">
      <div className="box box-filter">
        <Filter
          type={"order"}
          options={["Codigo", "Email", "Todos"]}
          onFilterOpen={filterOpenHandler}
          onIsFilterOpen={isFilterOpen}
          onSearchData={searchData}
        />

        <div
          style={isFilterOpen ? { display: "flex" } : { display: "none" }}
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
            <label htmlFor="gettingout-status-1">
              <input
                defaultValue="leaving"
                onChange={changeStatusInput}
                type="radio"
                name="status-1"
                id="gettingout-status-1"
              />{" "}
              De salida
            </label>
            <label htmlFor="onitsway-status-1">
              <input
                defaultValue="onitsway"
                onChange={changeStatusInput}
                type="radio"
                name="status-1"
                id="onitsway-status-1"
              />{" "}
              En camino
            </label>
            <label htmlFor="received-status-1">
              <input
                defaultValue="received"
                onChange={changeStatusInput}
                type="radio"
                name="status-1"
                id="received-status-1"
              />{" "}
              Recibido
            </label>
            <label htmlFor="canceled-status-1">
              <input
                defaultValue="canceled"
                onChange={changeStatusInput}
                type="radio"
                name="status-1"
                id="canceled-status-1"
              />{" "}
              Cancelado
            </label>
            <label htmlFor="paymenterror-status-1">
              <input
                defaultValue="paymenterror"
                onChange={changeStatusInput}
                type="radio"
                name="status-1"
                id="paymenterror-status-1"
              />{" "}
              Error en pago
            </label>
          </div>
          <div>
            <h4>Envio:</h4>
            <label htmlFor="normal-ship-1">
              <input
                defaultValue="regular"
                onChange={changeShippingInput}
                type="radio"
                name="ship-1"
                id="normal-ship-1"
              />{" "}
              Regular
            </label>
            <label htmlFor="fast-ship-1">
              <input
                defaultValue="fast"
                onChange={changeShippingInput}
                type="radio"
                name="ship-1"
                id="fast-ship-1"
              />{" "}
              Rapido
            </label>
            <label htmlFor="free-ship-1">
              <input
                defaultValue="free"
                onChange={changeShippingInput}
                type="radio"
                name="ship-1"
                id="free-ship-1"
              />{" "}
              Gratis
            </label>
          </div>
          
          <div>
            <h4>Tipo:</h4>
            <label htmlFor="normal-type-1">
              <input
                defaultValue="normal"
                onChange={changeTypeInput}
                type="radio"
                name="type-1"
                id="normal-type-1"
              />{" "}
              Normal
            </label>
            <label htmlFor="express-type-1">
              <input
                defaultValue="express"
                onChange={changeTypeInput}
                type="radio"
                name="type-1"
                id="express-type-1"
              />{" "}
              Expreso
            </label>
          </div>
          <div>
            <h4>Locación:</h4>
            <label htmlFor="city1-address-1">
              <input type="radio" name="address-1" id="city1-address-1" />{" "}
              Ciudad 1
            </label>
            <label htmlFor="city2-address-1">
              <input type="radio" name="address-1" id="city2-address-1" />{" "}
              Ciudad 2
            </label>
            <label htmlFor="city3-address-1">
              <input type="radio" name="address-1" id="city3-address-1" />{" "}
              Ciudad 3
            </label>
            <label htmlFor="city4-address-1">
              <input type="radio" name="address-1" id="city4-address-1" />{" "}
              Ciudad 4
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterOrders;
