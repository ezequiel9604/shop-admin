import { useState } from "react";

import "./css-styles/styles.css";
import OrdersCard from "./OrdersCard";
import FilterOrders from "../filter.component/FilterOrders";
import { Orders } from "../../dummyData";

function Order(props) {
  const [orders, setOrders] = useState(Orders);
  const [dataToFilter, setDataToFilter] = useState(null);

  function searchDataToFilter(data) {
    setDataToFilter(data);
  }

  function filterSelectedItem(item, data) {
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

  function getItems() {
    if (dataToFilter) {
      let arr = [...orders];
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
              if (dataToFilter.search === current.client.email) {
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

    return orders;
  }

  return (
    <div id="order">
      <div className="box-container">
        <div className="box box-header">
          <h2>Generales Pedidos</h2>
        </div>
      </div>

      <FilterOrders onSearchDataToFilter={searchDataToFilter} />

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

          {getItems().map((current) => {
            return <OrdersCard order={current} key={current.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Order;
