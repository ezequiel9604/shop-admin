import React, { Component } from "react";

import ClientsCard from "./ClientsCard";
import FilterClients from "../filter.component/FilterClients";

import "./css-styles/styles.css";

import ManAvatar from "../../images/placeholder-man.png";
import WomanAvatar from "../../images/placeholder-woman.png";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [
        {
          id: "USR-025456",
          name: "Sarah Doe",
          email: "sarahdoe@gmail.com",
          image: WomanAvatar,
          gender: "female",
          status: "connected",
          type: "normal",
          phone: "809-111-0000",
          birthday: "1997-05-02",
          password: "mypassword",
          streetNumber: 8,
          streetName: "Francisco Henriquez y Carvajal",
          hood: "Brisas del Este",
          city: "Santo Domingo Este",
        },
        {
          id: "USR-025941",
          name: "John Doe",
          email: "johndoe@gmail.com",
          image: ManAvatar,
          gender: "male",
          status: "offline",
          type: "express",
          phone: "809-222-0000",
          birthday: "1996-08-12",
          password: "mypassword",
          streetNumber: 8,
          streetName: "Francisco Henriquez y Carvajal",
          hood: "Brisas del Este",
          city: "Santo Domingo Este",
        },
        {
          id: "USR-025965",
          name: "Maria Perez",
          email: "mariaperez@gmail.com",
          image: WomanAvatar,
          gender: "female",
          status: "suspended",
          type: "normal",
          phone: "809-222-0000",
          birthday: "1995-01-20",
          password: "mypassword",
          streetNumber: 8,
          streetName: "Francisco Henriquez y Carvajal",
          hood: "Brisas del Este",
          city: "Santo Domingo Este",
        },
        {
          id: "USR-025408",
          name: "Mike Doe",
          email: "mikedoe@gmail.com",
          image: ManAvatar,
          gender: "male",
          status: "retired",
          type: "normal",
          phone: "809-222-0000",
          birthday: "1995-12-10",
          password: "mypassword",
          streetNumber: 8,
          streetName: "Francisco Henriquez y Carvajal",
          hood: "Brisas del Este",
          city: "Santo Domingo Este",
        },
      ],

      dataToFilter: null,
    };

    this.searchDataToFilter = this.searchDataToFilter.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  searchDataToFilter(data) {
    this.setState({ dataToFilter: data });
  }

  filterSelectedItem(item, data) {
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

  getItems() {
    console.log(this.state.dataToFilter);

    const { dataToFilter } = this.state;
    const { clients } = this.state;

    if (dataToFilter) {
      const arr = clients.filter((current) => {
        switch (dataToFilter.option) {
          case "Codigo":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.id) {
                return this.filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return this.filterSelectedItem(current, dataToFilter);
            }

          case "Email":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.email) {
                return this.filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return this.filterSelectedItem(current, dataToFilter);
            }

          case "Nombre":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.name) {
                return this.filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return this.filterSelectedItem(current, dataToFilter);
            }

          default:
            return current;
        }
      });

      return arr;
    }

    return clients;
  }

  render() {
    return (
      <div id="users">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Usuarios</h2>
          </div>
        </div>

        <FilterClients onSearchDataToFilter={this.searchDataToFilter} />

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

            {this.getItems().map((current) => {
              return <ClientsCard clients={current} key={current.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
