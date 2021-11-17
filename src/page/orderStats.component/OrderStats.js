import { useState, useEffect } from "react";
import "./css-styles/styles.css";
import BoxType from "../boxType.component/BoxType";
import BoxCategory from "../boxCategory.componet/BoxCategory";
import BoxChart from "../boxChart.component/BoxChart";
import { getTotalByCondition, getAmountByCondition } from "../../helpers";
import { Orders } from "../../dummyData";
import BoxTable from "../boxTable.component/BoxTable";

function OrderStats(props) {
  const [orders, setOrders] = useState([]);
  const [orderShip, setOrderShip] = useState("all");

  useEffect(function () {
    setOrders(Orders);
  }, []);

  function changeSetOrderShip(event) {
    setOrderShip(event.target.value);
  }

  function getAmountByStatus(status) {
    let counter = 0;
    if (orderShip === "all") {
      orders.forEach((current) => {
        if (current.status === status) {
          counter++;
        }
      });
      return counter;
    } else {
      orders.forEach((current) => {
        if (current.shippingMethod === orderShip) {
          if (current.status === status) {
            counter++;
          }
        }
      });
      return counter;
    }
  }

  function infoBoxCategory() {
    return [
      { title: "Recibidos", total: getAmountByStatus("received") },
      { title: "De Salida", total: getAmountByStatus("leaving") },
      { title: "En camino", total: getAmountByStatus("onitsway") },
      { title: "Cancelados", total: getAmountByStatus("canceled") },
      { title: "Error en Pago", total: getAmountByStatus("paymenterror") },
    ];
  }

  function infoBoxType() {
    return [
      {
        title: "Pedidos Normales",
        total: getTotalByCondition(orders, "type", "=", "normal"),
        subtypes: [
          {
            title: "Regular",
            amount: getAmountByCondition(
              orders,
              "type",
              "=",
              "normal",
              "shippingMethod",
              "regular"
            ),
          },
          {
            title: "Rapido",
            amount: getAmountByCondition(
              orders,
              "type",
              "=",
              "normal",
              "shippingMethod",
              "fast"
            ),
          },
          {
            title: "Gratis",
            amount: getAmountByCondition(
              orders,
              "type",
              "=",
              "normal",
              "shippingMethod",
              "free"
            ),
          },
        ],
      },
      {
        title: "Pedidos Expresos",
        total: getTotalByCondition(orders, "type", "=", "express"),
        subtypes: [
          {
            title: "Regular",
            amount: getAmountByCondition(
              orders,
              "type",
              "=",
              "express",
              "shippingMethod",
              "regular"
            ),
          },
          {
            title: "Rapido",
            amount: getAmountByCondition(
              orders,
              "type",
              "=",
              "express",
              "shippingMethod",
              "fast"
            ),
          },
          {
            title: "Gratis",
            amount: getAmountByCondition(
              orders,
              "type",
              "=",
              "express",
              "shippingMethod",
              "free"
            ),
          },
        ],
      },
    ];
  }

  function getTodaysOrder() {
    let todaysOrders = [];
    orders.forEach((current) => {
      if (current.orderDate === "2021-05-01") {
        todaysOrders.push(current);
      }
    });
    return todaysOrders;
  }

  return (
    <div id="order-stats">
      <div className="box-container">
        <div className="box box-header">
          <h2>Estadisticas de Pedidos</h2>
        </div>
      </div>

      <BoxType column="2" types={infoBoxType()} />

      <BoxCategory categories={infoBoxCategory()}>
        <div className="box box-outside-control">
          <div className="box-buttons">
            <label htmlFor="regular-ship-1">
              <input
                onClick={changeSetOrderShip}
                defaultValue="regular"
                type="radio"
                name="ship"
                id="regular-ship-1"
              />{" "}
              Regular
            </label>
            <label htmlFor="fast-ship-1">
              <input
                onClick={changeSetOrderShip}
                defaultValue="fast"
                type="radio"
                name="ship"
                id="fast-ship-1"
              />{" "}
              Rapido
            </label>
            <label htmlFor="free-ship-1">
              <input
                onClick={changeSetOrderShip}
                defaultValue="free"
                type="radio"
                name="ship"
                id="free-ship-1"
              />{" "}
              Gratis
            </label>
            <label htmlFor="all-ship-1">
              <input
                onClick={changeSetOrderShip}
                defaultValue="all"
                type="radio"
                name="ship"
                id="all-ship-1"
                defaultChecked
              />{" "}
              Todos
            </label>
          </div>
        </div>
      </BoxCategory>

      <BoxChart>
        <div className="box-inside-control">
          <div className="box-buttons">
            <mark style={{ backgroundColor: "#0099cc" }}>Normales</mark>
            <mark style={{ backgroundColor: "#ff9900" }}>Expreso</mark>
          </div>
          <div className="box-buttons">
            <select name="" id="">
              <option value="">Normal</option>
              <option value="">Rapido</option>
              <option value="">Gratis</option>
              <option value="">Todos</option>
            </select>
          </div>
        </div>
      </BoxChart>

      <div className="box-container">
        <BoxTable
          kind="orders"
          labels={[
            "Codigo",
            "Usuario",
            "Cantidad",
            "Total",
            "Estado",
            "Tipo",
            "Envio",
          ]}
          values={getTodaysOrder()}
        >
          <div className="box-inside-control">
            <div className="box-buttons">
              <select name="" id="">
                <option value="">Hoy</option>
                <option value="">Ayer</option>
                <option value="">Antes ayer</option>
              </select>
            </div>
          </div>
        </BoxTable>
      </div>
    </div>
  );
}

export default OrderStats;
