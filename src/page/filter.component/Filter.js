import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Filter(props) {
  const [selectInput, setSelectInput] = useState(props.options[0]);
  const [textInput, setTextInput] = useState("");

  function changeSelectInput(event) {
    setSelectInput(event.target.value);
  }

  function changeTextInput(event) {
    setTextInput(event.target.value);
  }

  function searchDataHandler() {
    const data = {
      option: selectInput,
      search: textInput,
    };

    props.onSearchData(data);
  }

  function renderType(type) {
    if (type === "order") {
      return <Link to="/addOrder">+ Agregar pedido</Link>;
    } else if (type === "user") {
      return <Link to="/clients/add-new-client">+ Agregar usuario</Link>;
    } else if (type === "product") {
      return <Link to="/inventory/add-new-product">+ Agregar producto</Link>;
    } else if (type === "comment") {
      return null;
    }
  }

  return (
    <Fragment>
      <div className="filter-1">
        <div>
          <select onChange={changeSelectInput} name="">
            {props.options.map((current, ind) => {
              return (
                <option key={ind} defaultValue={current}>
                  {current}
                </option>
              );
            })}
          </select>
          <input
            defaultValue={textInput}
            onChange={changeTextInput}
            type="search"
            placeholder={props.options.join(", ") + "..."}
          />
          <button onClick={searchDataHandler} type="button">
            Buscar
          </button>
        </div>

        {renderType(props.type)}
      </div>

      <button onClick={() => props.onFilterOpen()} id="btn-filter-advance">
        Opciones avanzadas
        <span className="material-icons-outlined">
          {props.onIsFilterOpen ? "expand_less" : "expand_more"}
        </span>
      </button>
    </Fragment>
  );
}

export default Filter;
