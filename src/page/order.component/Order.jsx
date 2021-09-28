import { Component } from "react";

import OrdersCard from "./OrdersCard";
import FilterOrders from "../filter.component/FilterOrders";

import "./css-styles/styles.css";

import SmartTv from "../../images/smart-tv.png";

class Order extends Component {
  constructor(props) {
    super(props);

    const tlt =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Rerum quam voluptas distinctio neque et maxime, provident odit veritatis." +
      " Asperiores eligendi iure sint ab. Quasi deserunt praesentium saepe corrupti, adipisci nesciunt?";

    this.state = {
      orders: [
        {
          id: "ORD-025456",
          shippingMethod: "regular",
          type: "normal",
          shippingCost: 100,
          total: 4270,
          descount: 150,
          status: "leaving",
          orderDate: "2021-05-01",
          shippingDate: "2021-05-02",

          client: {
            id: "USR-025479",
            name: "Sarah Doe",
            phone: "809-111-0000",
            email: "sarahdoe@gmail.com",
            streetNumber: "8",
            streetName: "Francisco Henriquez y Carvajal",
            hoodName: "Brisas del Este",
            cityName: "Santo Domingo Este",
            indications: tlt,
          },

          items: [
            {
              id: "ART-025481",
              image: SmartTv,
              amount: 2,
              price: 1250,
              brand: "Samsung",
              color: "black",
              size: '17"',
              capacity: "2GBs",
              condition: "Ninguna",
            },
            {
              id: "ART-025104",
              image: SmartTv,
              amount: 1,
              price: 1670,
              brand: "Samsung",
              color: "blue",
              size: '24"',
              capacity: "2GBs",
              condition: "En devolucion",
            },
          ],
        },
        {
          id: "ORD-025703",
          shippingMethod: "fast",
          type: "express",
          shippingCost: 150,
          total: 1400,
          descount: 150,
          status: "received",
          orderDate: "2021-05-01",
          shippingDate: "2021-05-02",

          client: {
            id: "USR-025149",
            name: "John Doe",
            phone: "809-111-0000",
            email: "johndoe@gmail.com",
            streetNumber: "8",
            streetName: "Francisco Henriquez y Carvajal",
            hoodName: "Brisas del Este",
            cityName: "Santo Domingo Este",
            indications: tlt,
          },

          items: [
            {
              id: "ART-025698",
              image: SmartTv,
              amount: 1,
              price: 1250,
              brand: "Samsung",
              color: "black",
              size: '17"',
              capacity: "2GBs",
              condition: "Ninguna",
            },
          ],
        },
      ],
      dataToFilter: null,
    };

    this.getItems = this.getItems.bind(this);
    this.searchDataToFilter = this.searchDataToFilter.bind(this);
  }

  searchDataToFilter(data) {
    this.setState({ dataToFilter: data });
  }

  filterSelectedItem(item, data) {
    let chosen = item;

    if (data.status) {
      chosen = item.status === data.status ? item : null;

      if (!chosen) return null;

      if (data.shipping) {
        chosen = item.shippingMethod === data.shipping ? item : null;
      }

      if (!chosen) return null;

      if (data.type) {
        chosen = item.type === data.type ? item : null;
      }

      if (!chosen) return null;
    }
    if (data.shipping) {
      chosen = item.shippingMethod === data.shipping ? item : null;
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
    const { orders } = this.state;

    if (dataToFilter) {
      const arr = orders.filter((current) => {
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
              if (dataToFilter.search === current.client.email) {
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

    return orders;
  }

  render() {
    return (
      <div id="order">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Pedidos</h2>
          </div>
        </div>

        <FilterOrders onSearchDataToFilter={this.searchDataToFilter} />

        <div className="box-container">
          <div className="box box-table box-table-order">
            <div className="box-table-head">
              <label>Codigo</label>
              <label>Email</label>
              <label>Usuario</label>
              <label>Envio</label>
              <label>Estado</label>
              <label>Detalles</label>
            </div>

            {this.getItems().map((current) => {
              return <OrdersCard order={current} key={current.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
