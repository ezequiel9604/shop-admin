import React, { useState } from "react";

function OrdersCard(props) {
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  function switchDetailsOpen() {
    setDetailsOpen(!isDetailsOpen);
  }

  function formatOrderStatus(status) {
    if (status === "r") {
      return <mark className="box-table-success">Recibido</mark>;
    } else if (status === "d") {
      return <mark className="box-table-warning">De salida</mark>;
    } else if (status === "e") {
      return <mark className="box-table-secundary">En camino</mark>;
    } else if (status === "er") {
      return <mark className="box-table-error">Error de pago</mark>;
    } else if (status === "c") {
      return <mark className="box-table-cancel">Cancelado</mark>;
    }
  }

  function formatOrderType(type, id) {
    if (type === "n") {
      return (
        <React.Fragment>
          <label htmlFor={"normal-type" + id}>
            <input
              type="radio"
              name={"type" + id}
              id={"normal-type" + id}
              defaultChecked
            />{" "}
            Normal
          </label>
          <label htmlFor={"express-type" + id}>
            <input type="radio" name={"type" + id} id={"express-type" + id} />{" "}
            Expreso
          </label>
        </React.Fragment>
      );
    } else if (type === "e") {
      return (
        <React.Fragment>
          <label htmlFor={"normal-type" + id}>
            <input type="radio" name={"type" + id} id={"normal-type" + id} />{" "}
            Normal
          </label>
          <label htmlFor={"express-type" + id}>
            <input
              type="radio"
              name={"type" + id}
              id={"express-type" + id}
              defaultChecked
            />{" "}
            Expreso
          </label>
        </React.Fragment>
      );
    }
  }

  function formatOrderShipping(shipping) {
    if (shipping === "r") {
      return "Regular";
    } else if (shipping === "f") {
      return "Rapido";
    } else if (shipping === "fr") {
      return "Gratis";
    }
  }

  function formatedNumber(num) {
    if (num >= 1000) {
      let newNum = num + "";
      let formated = "";

      for (let x = 0; x < newNum.length; x++) {
        if (x === 1) {
          formated += ",";
        }
        formated += newNum.charAt(x);
      }

      return formated;
    }

    return num;
  }

  const { order } = props;

  return (
    <div className="box-table-body box-table-body-order">
      <article>
        <p>{order.id}</p>
        <p>{order.client.email}</p>
        <p>{order.client.id}</p>
        <p>{formatOrderShipping(order.shippingMethod)}</p>
        <p>{formatOrderStatus(order.status)}</p>
        <p>
          <button
            onClick={switchDetailsOpen}
            type="button"
            className="btn-see-details"
          >
            <span className="material-icons-outlined">
              {isDetailsOpen ? "expand_less" : "expand_more"}
            </span>
          </button>
        </p>
      </article>
      <form
        style={isDetailsOpen ? { display: "flex" } : { display: "none" }}
        className="box-update-details box-update-details-order"
      >
        <div>
          <h4>Tipo:</h4>
          {formatOrderType(order.type, order.id)}
          <br />
          <h4>Costo envio:</h4>
          <label>${order.shippingCost}</label>
          <br />
          <h4>Total:</h4>
          <label>${formatedNumber(order.total)}</label>
        </div>
        <div>
          <article>
            <input type="text" defaultValue={order.id} disabled />
            <input type="text" defaultValue={order.client.name} disabled />
          </article>
          <article>
            <input type="text" defaultValue={order.client.phone} />
            <input type="email" defaultValue={order.client.email} disabled />
          </article>
          <article>
            {/* order date  */}
            <input type="datetime" defaultValue={order.orderDate} disabled />
            {/* shipping date */}
            <input type="datetime" defaultValue={order.shippingDate} disabled />
          </article>
          <article>
            <input
              type="text"
              style={{ width: "10%" }}
              defaultValue={order.client.streetNumber}
            />
            <input
              type="text"
              style={{ width: "80%" }}
              defaultValue={order.client.streetName}
            />
            <select name="" id="">
              <option defaultValue="">{order.client.hoodName}</option>
            </select>
            <select name="" id="">
              <option defaultValue="">{order.client.cityName}</option>
            </select>
          </article>
          <article>
            <textarea
              name=""
              cols="30"
              rows="10"
              defaultValue={order.client.indications}
            ></textarea>
          </article>
        </div>
        <div>
          <h4>Estado:</h4>
          <label htmlFor="gettingout-status-2">
            <input type="radio" id="gettingout-status-2" /> De salida
          </label>
          <label htmlFor="onitsway-status-2">
            <input type="radio" id="onitsway-status-2" /> En camino
          </label>
          <label htmlFor="received-status-2">
            <input type="radio" id="received-status-2" defaultChecked />
            Recibido
          </label>
          <label htmlFor="canceled-status-2">
            <input type="radio" id="canceled-status-2" /> Cancelado
          </label>
          <label htmlFor="paymenterror-status-2">
            <input type="radio" id="paymenterror-status-2" /> Error en pago
          </label>
          <br />
          <h4>Descuento:</h4>
          <label>${order.descount}</label>
        </div>

        <div className="box-inside-table-head box-inside-table-head-order">
          <label>Articulo</label>
          <label>Sub-articulos</label>
          <label>Cantidad</label>
          <label>Precio</label>
          <label>Sub-total</label>
          <label>Condición</label>
        </div>

        <div className="box-inside-table-body box-inside-table-body-order">
          {order.items.map((current) => {
            return (
              <article>
                <p>
                  <img src={current.image} alt="" />
                  {current.id}
                </p>
                <p>
                  Marca: {current.brand}, Color: {current.color}, Tamaño:
                  {current.size}, Capacidad: {current.capacity}
                </p>
                <p>{current.amount}</p>
                <p>${formatedNumber(current.price)}</p>
                <p>${formatedNumber(current.price * current.amount)}</p>
                <p>
                  <select name="" id="">
                    <option defaultValue="">{current.condition}</option>
                  </select>
                </p>
              </article>
            );
          })}
        </div>

        <div className="box-inside-table-footer">
          <button type="button">Eliminar</button>
          <button type="button">Actualizar</button>
        </div>
      </form>
    </div>
  );
}

export default OrdersCard;
