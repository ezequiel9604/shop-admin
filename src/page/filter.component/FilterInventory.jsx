import React, { useState } from "react";
import Filter from "./Filter";

import "./css-styles/styles.css";

function FilterInventory(props) {
  const brands = [
    "brand 1",
    "brand 2",
    "brand 3",
    "brand 4",
    "brand 5",
    "brand 6",
  ];
  const departments = ["Tecnologia", "Ferreteria", "Ropa", "Calzado", "Hogar"];

  const [isFilterOpen, setFilterOpen] = useState(false);

  const [brandInput, setBrandInput] = useState(null);
  const [departmentInput, setDepartmentInput] = useState(null);
  const [statusInput, setStatusInput] = useState(null);
  const [genderInput, setGenderInput] = useState(null);
  const [offerInput, setOfferInput] = useState(null);

  function filterOpenHandler() {
    setFilterOpen(!isFilterOpen);
  }

  function changeBrandInput(event) {
    setBrandInput(event.target.checked ? event.target.value : null);
  }

  function changeDepartment(event) {
    setDepartmentInput(event.target.checked ? event.target.value : null);
  }

  function changeStatusInput(event) {
    setStatusInput(event.target.checked ? event.target.value : null);
  }

  function changeGenderInput(event) {
    setGenderInput(event.target.checked ? event.target.value : null);
  }

  function changeOfferInput(event) {
    setOfferInput(event.target.checked ? event.target.value : null);
  }

  function searchData(data) {
    data.brand = brandInput;
    data.department = departmentInput;
    data.status = statusInput;
    data.gender = genderInput;
    data.offer = offerInput;

    props.onSearchDataToFilter(data);
  }

  return (
    <div className="box-container">
      <div className="box box-filter">
        <Filter
          type={"product"}
          options={["Codigo", "Titulo", "Todos"]}
          onFilterOpen={filterOpenHandler}
          onIsFilterOpen={isFilterOpen}
          onSearchData={searchData}
        />

        <div
          style={isFilterOpen ? { display: "flex" } : { display: "none" }}
          className="filter-2"
        >
          <div>
            <h4>Marcas:</h4>

            {brands.map((current, ind) => {
              return (
                <label key={ind} htmlFor={"brands-" + current}>
                  <input
                    defaultValue={current}
                    onClick={changeBrandInput}
                    type="radio"
                    name="brands-1"
                    id={"brands-" + current}
                  />{" "}
                  {current}
                </label>
              );
            })}
          </div>
          <div>
            <h4>Departamentos:</h4>

            {departments.map((current, ind) => {
              return (
                <label key={ind} htmlFor={"department-" + current}>
                  <input
                    defaultValue={current}
                    onClick={changeDepartment}
                    type="radio"
                    name="depart-1"
                    id={"department-" + current}
                  />{" "}
                  {current}
                </label>
              );
            })}
          </div>
          <div>
            <h4>Precio:</h4>
            <label htmlFor="verylow-price-1">
              <input type="radio" name="price-1" id="verylow-price-1" /> 100-500
            </label>
            <label htmlFor="low-price-1">
              <input type="radio" name="price-1" id="low-price-1" /> 500-1000
            </label>
            <label htmlFor="expensive-price-1">
              <input type="radio" name="price-1" id="expensive-price-1" />{" "}
              1000-1500
            </label>
            <label htmlFor="veryexpensive-price-1">
              <input type="radio" name="price-1" id="veryexpensive-price-1" />{" "}
              1500+
            </label>
          </div>
          <div>
            <h4>Estado:</h4>
            <label htmlFor="new-status-1">
              <input
                defaultValue="new"
                onClick={changeStatusInput}
                type="radio"
                name="status-1"
                id="new-status-1"
              />{" "}
              Nuevo
            </label>
            <label htmlFor="used-status-1">
              <input
                defaultValue="used"
                onClick={changeStatusInput}
                type="radio"
                name="status-1"
                id="used-status-1"
              />{" "}
              Usado
            </label>
            <label htmlFor="repair-status-1">
              <input
                defaultValue="repair"
                onClick={changeStatusInput}
                type="radio"
                name="status-1"
                id="repair-status-1"
              />{" "}
              Reparado
            </label>
            <label htmlFor="hide-status-1">
              <input
                defaultValue="hide"
                onClick={changeStatusInput}
                type="radio"
                name="status-1"
                id="hide-status-1"
              />{" "}
              Oculto
            </label>
          </div>
          <div>
            <h4>Genero:</h4>
            <label htmlFor="male-gender-1">
              <input
                defaultValue="male"
                onClick={changeGenderInput}
                type="radio"
                name="gender-1"
                id="male-gender-1"
              />{" "}
              Hombres
            </label>
            <label htmlFor="female-gender-1">
              <input
                defaultValue="female"
                onClick={changeGenderInput}
                type="radio"
                name="gender-1"
                id="female-gender-1"
              />{" "}
              Mujeres
            </label>
            <label htmlFor="all-gender-1">
              <input
                defaultValue="all"
                onClick={changeGenderInput}
                type="radio"
                name="gender-1"
                id="all-gender-1"
              />{" "}
              Todos
            </label>
          </div>
          <div>
            <h4>Incluir oferta:</h4>
            <label htmlFor="yes-offer-1">
              <input
                defaultValue="yes"
                onClick={changeOfferInput}
                type="radio"
                name="offer-1"
                id="yes-offer-1"
              />{" "}
              Si
            </label>
            <label htmlFor="no-offer-1">
              <input
                defaultValue="no"
                onClick={changeOfferInput}
                type="radio"
                name="offer-1"
                id="no-offer-1"
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
