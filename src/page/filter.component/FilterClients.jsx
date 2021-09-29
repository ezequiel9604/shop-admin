import React, { useState } from "react";
import Filter from "./Filter";

import "./css-styles/styles.css";

function FilterClients(props) {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const [genderInput, setGenderInput] = useState(null);
  const [statusInput, setStatusInput] = useState(null);
  const [typeInput, setTypeInput] = useState(null);

  function filterOpenHandler() {
    setFilterOpen(!isFilterOpen);
  }

  function changeGenderInput(event){
    setGenderInput(event.target.checked ? event.target.value : null);
  }

  function changeStatusInput(event){
    setStatusInput(event.target.checked ? event.target.value : null);
  }

  function changeTypeInput(event){
    setTypeInput(event.target.checked ? event.target.value : null);
  }

  function searchData(data){
    data.gender = genderInput;
    data.status = statusInput;
    data.type = typeInput;

    props.onSearchDataToFilter(data);
  }

  return (
    <div className="box-container">
      <div className="box box-filter">
      <Filter
          type={"user"}
          options={["Codigo", "Email", "Nombre", "Todos"]}
          onFilterOpen={filterOpenHandler}
          onIsFilterOpen={isFilterOpen}
          onSearchData={searchData}
        />
        <div
          style={isFilterOpen ? { display: "flex" } : { display: "none" }}
          className="filter-2"
        >
          <div>
            <h4>Genero:</h4>
            <label htmlFor="male-gender-1">
              <input defaultValue="male" onClick={changeGenderInput} type="radio" name="gender-1" id="male-gender-1" /> Hombre
            </label>
            <label htmlFor="female-gender-1">
              <input defaultValue="female" onClick={changeGenderInput} type="radio" name="gender-1" id="female-gender-1" /> Mujer
            </label>
          </div>
          <div>
            <h4>Estado:</h4>
            <label htmlFor="connected-status-1">
              <input defaultValue="connected" onClick={changeStatusInput} type="radio" name="status-1" id="connected-status-1" /> Conectado
            </label>
            <label htmlFor="suspended-status-1">
              <input defaultValue="suspended" onClick={changeStatusInput} type="radio" name="status-1" id="suspended-status-1" /> Suspendido
            </label>
            <label htmlFor="offline-status-1">
              <input defaultValue="offline" onClick={changeStatusInput} type="radio" name="status-1" id="offline-status-1" /> Fuera de linea
            </label>
            <label htmlFor="retired-status-1">
              <input defaultValue="retired" onClick={changeStatusInput} type="radio" name="status-1" id="retired-status-1" /> Retirados
            </label>
          </div>
          <div>
            <h4>Edad:</h4>
            <label htmlFor="18-25-age-1">
              <input defaultValue="18-25" type="radio" name="age-1" id="18-25-age-1" /> 18 - 25
            </label>
            <label htmlFor="26-35-age-1">
              <input defaultValue="26-35" type="radio" name="age-1" id="26-35-age-1" /> 26 - 35
            </label>
            <label htmlFor="36-45-age-1">
              <input defaultValue="36-45" type="radio" name="age-1" id="36-45-age-1" /> 36 - 45
            </label>
            <label htmlFor="46+-age-1">
              <input defaultValue="46+" type="radio" name="age-1" id="46+-age-1" /> 46+
            </label>
          </div>
          <div>
            <h4>Locación:</h4>
            <label htmlFor="city1-address-1">
              <input type="radio" name="address-1" id="city1-address-1" /> Barrio 1
            </label>
            <label htmlFor="city2-address-1">
              <input type="radio" name="address-1" id="city2-address-1" /> Barrio 2
            </label>
            <label htmlFor="city3-address-1">
              <input type="radio" name="address-1" id="city3-address-1" /> Barrio 3
            </label>
            <label htmlFor="city4-address-1">
              <input type="radio" name="address-1" id="city4-address-1" /> Barrio 4
            </label>
          </div>
          <div>
            <h4>Tipo:</h4>
            <label htmlFor="normal-type-1">
              <input defaultValue="normal" onClick={changeTypeInput} type="radio" name="type-1" id="normal-type-1" /> Normal
            </label>
            <label htmlFor="express-type-1">
              <input defaultValue="express" onClick={changeTypeInput} type="radio" name="type-1" id="express-type-1" /> Expreso
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterClients;
