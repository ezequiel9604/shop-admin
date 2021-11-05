import { useState } from "react";
import "./css-styles/styles.css";
import BoxType from "../boxType.component/BoxType";
import BoxCategory from "../boxCategory.componet/BoxCategory";
import { Orders } from "../../dummyData";

function OrderStats(props) {
  const [orders, setOrders] = useState(Orders);
  const [orderShip, setOrderShip] = useState("all");

  function changeSetOrderShip(event) {
    setOrderShip(event.target.value);
  }

  function getTotalByType(type) {
    let counter = 0;
    orders.forEach((current) => {
      if (current.type === type) {
        counter++;
      }
    });
    return counter;
  }
  
  function getAmountByShipping(ship, type) {
    let counter = 0;
    orders.forEach((current) => {
      if (current.type === type) {
        if (current.shippingMethod === ship) {
          counter++;
        }
      }
    });
    return counter;
  }

  function infoBoxType() {
    return [
      {
        title: "Pedidos Normales",
        total: getTotalByType("normal"),
        subtypes: [
          {
            title: "Regular",
            amount: getAmountByShipping("regular", "normal"),
          },
          { title: "Rapido", amount: getAmountByShipping("fast", "normal") },
          { title: "Gratis", amount: getAmountByShipping("free", "normal") },
        ],
      },
      {
        title: "Pedidos Expresos",
        total: getTotalByType("express"),
        subtypes: [
          {
            title: "Regular",
            amount: getAmountByShipping("regular", "express"),
          },
          {
            title: "Rapido",
            amount: getAmountByShipping("fast", "express"),
          },
          {
            title: "Gratis",
            amount: getAmountByShipping("free", "express"),
          },
        ],
      },
    ];
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

  function renderingStatus(status) {
    if (status === "received") {
      return <mark className="box-table-success">Recibido</mark>;
    } else if (status === "leaving") {
      return <mark className="box-table-warning">De Salida</mark>;
    } else if (status === "onitsway") {
      return <mark className="box-table-secundary">En camino</mark>;
    } else if (status === "canceled") {
      return <mark className="box-table-cancel">Cancelados</mark>;
    } else if (status === "paymenterror") {
      return <mark className="box-table-error">Error en Pago</mark>;
    }
  }

  function formatedNumber(num) {
    if (num >= 1000 && num < 10000) {
      let newNum = num + "";
      let formated = "";

      for (let x = 0; x < newNum.length; x++) {
        if (x === 1) {
          formated += ",";
        }
        formated += newNum.charAt(x);
      }

      return formated;
    } else if (num >= 10000) {
      let newNum = num + "";
      let formated = "";

      for (let x = 0; x < newNum.length; x++) {
        if (x === 2) {
          formated += ",";
        }
        formated += newNum.charAt(x);
      }

      return formated;
    }

    return num;
  }

  return (
    <div id="order-stats">
      <div className="box-container">
        <div className="box box-header">
          <h2>Estadisticas de Pedidos</h2>
        </div>
      </div>

      <BoxType types={infoBoxType()} />

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

      <div className="box-container">
        <div className="box box-table">
          <div className="box-inside-control">
            <div className="box-buttons">
              <select name="" id="">
                <option value="">Hoy</option>
                <option value="">Ayer</option>
                <option value="">Antes ayer</option>
              </select>
            </div>
          </div>

          <div className="box-table-head">
            <label>Codigo</label>
            <label>Usuario</label>
            <label>Cantidad</label>
            <label>Total</label>
            <label>Estado</label>
            <label>Tipo</label>
            <label>Envio</label>
          </div>

          <div className="box-table-body">
            {orders.map((current) => {
              return (
                <article key={current.id}>
                  <p>{current.id}</p>
                  <p>{current.client.name}</p>
                  <p>{current.items.length}</p>
                  <p>${formatedNumber(current.total)}</p>
                  <p>{renderingStatus(current.status)}</p>
                  <p>{current.type}</p>
                  <p>{current.shippingMethod}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStats;
