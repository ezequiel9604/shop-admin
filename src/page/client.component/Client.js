import { useState } from "react";

import "./css-styles/styles.css";
import ClientsCard from "./ClientsCard";
import FilterClients from "../filter.component/FilterClients";
import { Clients } from "../../dummyData";

function Client() {
  const [clients, setClients] = useState(Clients);
  const [dataToFilter, setDataToFilter] = useState(null);

  function searchDataToFilter(data) {
    setDataToFilter(data);
  }

  function filterSelectedItem(item, data) {
    let chosen = item;

    if (data.status) {
      chosen = item.status === data.status ? item : null;

      if (!chosen) return null;

      if (data.gender) {
        chosen = item.gender === data.gender ? item : null;
      }

      if (!chosen) return null;

      if (data.type) {
        chosen = item.type === data.type ? item : null;
      }

      if (!chosen) return null;
    }
    if (data.gender) {
      chosen = item.gender === data.gender ? item : null;
      if (!chosen) return null;
      if (data.type) {
        chosen = item.type === data.type ? item : null;
      }
      if (!chosen) return null;
    }
    if (data.type) {
      chosen = item.type === data.type ? item : null;
    }

    if (!chosen) return null;

    return chosen;
  }

  function getItems() {
    if (dataToFilter) {
      let arr = [...clients];
      arr = arr.filter((current) => {
        switch (dataToFilter.option) {
          case "Codigo":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.id) {
                return filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return filterSelectedItem(current, dataToFilter);
            }

          case "Email":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.email) {
                return filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return filterSelectedItem(current, dataToFilter);
            }

          case "Nombre":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.name) {
                return filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return filterSelectedItem(current, dataToFilter);
            }

          default:
            return current;
        }
      });

      return arr;
    }

    return clients;
  }

  return (
    <div id="users">
      <div className="box-container">
        <div className="box box-header">
          <h2>Generales Usuarios</h2>
        </div>
      </div>

      <FilterClients onSearchDataToFilter={searchDataToFilter} />

      <div className="box-container">
        <div className="box box-table box-table-client">
          <div className="box-table-head ">
            <label>Imagen / Codigo</label>
            <label>Nombre</label>
            <label>Email</label>
            <label>Genero</label>
            <label>Estado</label>
            <label>Detalles</label>
          </div>

          {getItems().map((current) => {
            return <ClientsCard clients={current} key={current.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Client;
