import { useState, useEffect } from "react";

import "./css-styles/styles.css";
import { Items } from "../../dummyData";
import BoxType from "../boxType.component/BoxType";
import BoxCategory from "../boxCategory.componet/BoxCategory";
import BoxChart from "../boxChart.component/BoxChart";
import BoxTable from "../boxTable.component/BoxTable";
import {
  getTotalByCondition,
  getAmountByCondition,
  getAmountByCategory,
} from "../../helpers";

function InventoryStats(props) {
  const [items, setItems] = useState([]);
  const [offers, setOffers] = useState(false);
  const [status, setStatus] = useState("all");

  useEffect(function () {
    setItems(Items);
  }, []);

  function changingOffers(event) {
    setOffers(event.target.checked);
  }

  function changingStatus(event) {
    setStatus(event.target.value);
  }

  function infoBoxType() {
    return [
      {
        title: "Disponibles",
        total: getTotalByCondition(items, "stock", ">", 0),
        subtypes: [
          {
            title: "Nuevos",
            amount: getAmountByCondition(
              items,
              "stock",
              ">",
              0,
              "status",
              "new"
            ),
          },
          {
            title: "Usados",
            amount: getAmountByCondition(
              items,
              "stock",
              ">",
              0,
              "status",
              "used"
            ),
          },
          {
            title: "Reparados",
            amount: getAmountByCondition(
              items,
              "stock",
              ">",
              0,
              "status",
              "repair"
            ),
          },
        ],
      },
      {
        title: "Vendidos",
        total: getTotalByCondition(items, "wasSold", "=", true),
        subtypes: [
          {
            title: "Nuevos",
            amount: getAmountByCondition(
              items,
              "wasSold",
              "=",
              true,
              "status",
              "new"
            ),
          },
          {
            title: "Usados",
            amount: getAmountByCondition(
              items,
              "wasSold",
              "=",
              true,
              "status",
              "used"
            ),
          },
          {
            title: "Reparados",
            amount: getAmountByCondition(
              items,
              "wasSold",
              "=",
              true,
              "status",
              "repair"
            ),
          },
        ],
      },
      {
        title: "Agotados",
        total: getTotalByCondition(items, "stock", "<", 1),
        subtypes: [
          {
            title: "Nuevos",
            amount: getAmountByCondition(
              items,
              "stock",
              ">",
              1,
              "status",
              "new"
            ),
          },
          {
            title: "Usados",
            amount: getAmountByCondition(
              items,
              "stock",
              ">",
              1,
              "status",
              "used"
            ),
          },
          {
            title: "Reparados",
            amount: getAmountByCondition(
              items,
              "stock",
              ">",
              1,
              "status",
              "repair"
            ),
          },
        ],
      },
    ];
  }

  function infoBoxCategory() {
    return [
      {
        title: "Ropa",
        total: getAmountByCategory(items, "cloth", offers, status),
      },
      {
        title: "Tecnologia",
        total: getAmountByCategory(items, "technology", offers, status),
      },
      {
        title: "Hogar",
        total: getAmountByCategory(items, "home", offers, status),
      },
      {
        title: "Ferreteria",
        total: getAmountByCategory(items, "tools", offers, status),
      },
      {
        title: "Electronica",
        total: getAmountByCategory(items, "electronics", offers, status),
      },
      {
        title: "Calzados",
        total: getAmountByCategory(items, "shoes", offers, status),
      },
    ];
  }

  return (
    <div id="inventory-stats">
      <div className="box-container">
        <div className="box box-header">
          <h2>Estadisticas de Inventario</h2>
        </div>
      </div>

      <BoxType column="3" types={infoBoxType()} />

      <BoxChart>
        <div className="box-inside-control">
          <div className="box-buttons">
            <label>Ventas</label>
          </div>
          <div className="box-buttons">
            <input type="week" name="" defaultValue="2021-W24" />
          </div>
          <div className="box-buttons">
            <mark style={{ backgroundColor: "#339966" }}>Nuevos</mark>
            <mark style={{ backgroundColor: "#0099cc" }}>Usados</mark>
            <mark style={{ backgroundColor: "#ff9900" }}>Reparados</mark>
          </div>
        </div>
      </BoxChart>

      <BoxCategory categories={infoBoxCategory()}>
        <div className="box box-outside-control">
          <div className="box-buttons">
            <label htmlFor="offer-1">
              <input
                onChange={changingOffers}
                type="checkbox"
                name="ship"
                id="offer-1"
              />{" "}
              En oferta
            </label>
          </div>
          <div className="box-buttons">
            <select onChange={changingStatus}>
              <option value="all">Todos</option>
              <option value="new">Nuevo</option>
              <option value="used">Usado</option>
              <option value="repair">Reparado</option>
            </select>
          </div>
        </div>
      </BoxCategory>

      <div className="box-container">
        <BoxTable
          kind="inventory"
          labels={[
            "Fecha",
            "Total inventario ($)",
            "Gastos ($)",
            "Ingresos ($)",
            "Utilidad ($)",
          ]}
        >
          <div className="box-inside-control">
            <div className="box-buttons">
              <label>Contabilidad</label>
            </div>
            <div className="box-buttons">
              <input type="week" name="" defaultValue="2021-W24" />
            </div>
          </div>
        </BoxTable>
      </div>
    </div>
  );
}

export default InventoryStats;
