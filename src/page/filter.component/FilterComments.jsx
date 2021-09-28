import React, { useState } from "react";
import Filter from "./Filter";

import "./css-styles/styles.css";


function FilterComments(props) {
  const [isFilterOpen, setFilterOpen] = useState(false);

  function filterOpenHandler() {
    setFilterOpen(!isFilterOpen);
  }

  return (
    <div className="box-container">
      <div className="box box-filter">
        
      <Filter
          type={"comment"}
          options={["Codigo", "Usuario"]}
          onFilterOpen={filterOpenHandler}
          onIsFilterOpen={isFilterOpen}
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
