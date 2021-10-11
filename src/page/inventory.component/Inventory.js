import { useState } from "react";
import "./css-styles/styles.css";

import InventoryCard from "./InventoryCard";
import FilterInventory from "../filter.component/FilterInventory";
import { Items } from "../../dummyData";

function Inventory(props) {
  const [items, setItems] = useState(Items);
  const [dataToFilter, setDataToFilter] = useState(null);

  function searchDataToFilter(data) {
    setDataToFilter(data);
  }

  function filterSelectedItem(item, data) {
    let chosen = item;

    if (data.brand) {
      chosen = item.brand === data.brand ? item : null;

      if (!chosen) return null;

      if (data.department) {
        chosen = item.department === data.department ? item : null;
      }

      if (!chosen) return null;

      if (data.status) {
        chosen = item.status === data.status ? item : null;
      }

      if (!chosen) return null;

      if (data.gender) {
        chosen = item.gender === data.gender ? item : null;
      }

      if (!chosen) return null;

      if (data.offer) {
        for (let i of item.subItems) {
          if (data.offer === "yes") {
            chosen = i.offerPrice > 0 ? item : null;
            break;
          }

          if (data.offer === "no") {
            chosen = i.offerPrice <= 0 ? item : null;
            break;
          }

          chosen = null;
        }
      }

      if (!chosen) return null;
    }

    if (data.department) {
      chosen = item.department === data.department ? item : null;

      if (!chosen) return null;

      if (data.status) {
        chosen = item.status === data.status ? item : null;
      }
      if (!chosen) return null;

      if (data.gender) {
        chosen = item.gender === data.gender ? item : null;
      }

      if (!chosen) return null;

      if (data.offer) {
        for (let i of item.subItems) {
          if (data.offer === "yes") {
            chosen = i.offerPrice > 0 ? item : null;
            break;
          }

          if (data.offer === "no") {
            chosen = i.offerPrice <= 0 ? item : null;
            break;
          }

          chosen = null;
        }
      }

      if (!chosen) return null;
    }

    if (data.status) {
      chosen = item.status === data.status ? item : null;

      if (!chosen) return null;

      if (data.gender) {
        chosen = item.gender === data.gender ? item : null;
      }

      if (!chosen) return null;

      if (data.offer) {
        for (let i of item.subItems) {
          if (data.offer === "yes") {
            chosen = i.offerPrice > 0 ? item : null;
            break;
          }

          if (data.offer === "no") {
            chosen = i.offerPrice <= 0 ? item : null;
            break;
          }

          chosen = null;
        }
      }

      if (!chosen) return null;
    }

    if (data.gender) {
      chosen = item.gender === data.gender ? item : null;

      if (!chosen) return null;

      if (data.offer) {
        for (let i of item.subItems) {
          if (data.offer === "yes") {
            chosen = i.offerPrice > 0 ? item : null;
            break;
          }

          if (data.offer === "no") {
            chosen = i.offerPrice <= 0 ? item : null;
            break;
          }

          chosen = null;
        }
      }

      if (!chosen) return null;
    }

    if (data.offer) {
      for (let i of item.subItems) {
        if (data.offer === "yes") {
          chosen = i.offerPrice > 0 ? item : null;
          break;
        }

        if (data.offer === "no") {
          chosen = i.offerPrice <= 0 ? item : null;
          break;
        }

        chosen = null;
      }
    }

    if (!chosen) return null;

    return chosen;
  }

  function getItems() {
    if (dataToFilter) {
      let arr = [...items];
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

          case "Titulo":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.title) {
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

    return items;
  }

  return (
    <div id="inventory">
      <div className="box-container">
        <div className="box box-header">
          <h2>Generales Inventario</h2>
        </div>
      </div>

      <FilterInventory onSearchDataToFilter={searchDataToFilter} />

      <div className="box-container">
        <div className="box box-table box-table-invetory">
          <div className="box-table-head">
            <label>Imagen / Codigo</label>
            <label>Titulo</label>
            <label>Estado</label>
            <label>Cantidad</label>
            <label>Detalles</label>
          </div>

          {getItems().map((current) => {
            return <InventoryCard key={current.id} items={current} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
