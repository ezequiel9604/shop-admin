import { Component } from "react";
import "./css-styles/styles.css";

import InventoryCard from "./InventoryCard";
import FilterInventory from "../filter.component/FilterInventory";

import SmartTv from "../../images/smart-tv.png";
import SmartTv2 from "../../images/smart-tv-2.png";
import SmartTv3 from "../../images/smart-tv-3.png";
import SmartTv4 from "../../images/smart-tv-4.png";
import SmartTv5 from "../../images/smart-tv-5.png";

class Inventory extends Component {
  constructor(props) {
    super(props);

    const tlt =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. " +
      "Dignissimos repudiandae adipisci at debitis, corrupti velit laudantium" +
      " nihil nulla iusto eos autem quod voluptatem, suscipit.";

    const descr =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" +
      "omnis dolor numquam voluptatum illum animi, labore dolorem hic," +
      "ullam esse libero delectus quas, ipsum in atque sapiente" +
      "consequuntur reiciendis similique. Lorem ipsum dolor sit, amet," +
      "consectetur adipisicing elit. Ad soluta, aspernatur eos quod" +
      "voluptatem doloribus voluptates doloremque, reprehenderit" +
      "asperiores, quia, autem nisi libero quis? Enim quae eligendi autem" +
      "quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      "Architecto atque eum eaque temporibus non impedit officiis" +
      "quisquam fugit sequi consectetur iure, facilis, mollitia magnam" +
      "animi. Reprehenderit necessitatibus nisi corrupti odio! Lorem" +
      "ipsum dolor sit amet consectetur, adipisicing, elit. Facilis" +
      "eligendi accusantium fugit quas quo consectetur, nihil, nam enim" +
      "esse ea tenetur iste, minus voluptatibus odit earum corporis," +
      "nostrum voluptate sunt. Lorem ipsum dolor sit amet consectetur" +
      "adipisicing elit. Nesciunt quod distinctio recusandae quam," +
      "dolore, consequatur laborum facilis beatae deleniti porro" +
      "doloribus neque, iusto veritatis obcaecati quos vel, inventore" +
      "eaque sapiente! Lorem ipsum dolor, sit amet consectetur" +
      "adipisicing elit. Dolor at distinctio pariatur, quos dolorum quo" +
      "nisi! Ratione, odit doloribus laudantium ipsa. Ipsum nostrum, amet" +
      "et qui sint architecto doloribus ad. Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Ab magni debitis quis eos aspernatur" +
      "excepturi, modi repellendus at nobis. Deserunt officiis expedita" +
      "voluptatibus, incidunt dolores neque qui dicta saepe" +
      "necessitatibus. Lorem ipsum dolor, sit amet consectetur" +
      "adipisicing elit. Dolor at distinctio pariatur, quos dolorum quo" +
      "nisi! Ratione, odit doloribus laudantium ipsa. Ipsum nostrum, amet" +
      "et qui sint architecto doloribus ad. Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Ab magni debitis quis eos aspernatur" +
      "excepturi, modi repellendus at nobis. Deserunt officiis expedita" +
      "voluptatibus, incidunt dolores neque qui dicta saepe" +
      "necessitatibus.";

    this.state = {
      items: [
        {
          id: "ART-025369",
          image: [SmartTv, SmartTv2, SmartTv3, SmartTv4, SmartTv5],
          title: tlt,
          description: descr,
          status: "new",
          gender: "all",
          stock: 25,
          quality: 4.8,
          department: "Tecnologia",
          brand: "brand 2",
          subItems: [
            {
              size: '24"',
              color: "Black",
              capacity: "2GBs",
              stock: 19,
              purchasedPrice: 1200,
              sellPrice: 1850,
              offerPrice: 1700,
            },
            {
              size: '17"',
              color: "Gray",
              capacity: "2GBs",
              stock: 6,
              purchasedPrice: 950,
              sellPrice: 1450,
              offerPrice: 1350,
            },
          ],
        },
        {
          id: "ART-025147",
          image: [SmartTv, SmartTv2, SmartTv3, SmartTv4, SmartTv5],
          title: tlt,
          description: descr,
          status: "used",
          gender: "all",
          stock: 20,
          quality: 4.8,
          department: "Tecnologia",
          brand: "brand 4",
          subItems: [
            {
              size: '24"',
              color: "Black",
              capacity: "2GBs",
              stock: 15,
              purchasedPrice: 1200,
              sellPrice: 1850,
              offerPrice: 0,
            },
            {
              size: '17"',
              color: "Gray",
              capacity: "2GBs",
              stock: 5,
              purchasedPrice: 950,
              sellPrice: 1450,
              offerPrice: 0,
            },
          ],
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

  getItems() {
    const { dataToFilter } = this.state;
    const { items } = this.state;

    if (dataToFilter) {
      const arr = items.filter((current) => {
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

          case "Titulo":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.title) {
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

    return items;
  }

  render() {
    return (
      <div id="inventory">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Inventario</h2>
          </div>
        </div>

        <FilterInventory onSearchDataToFilter={this.searchDataToFilter} />

        <div className="box-container">
          <div className="box box-table box-table-invetory">
            <div className="box-table-head">
              <label>Imagen / Codigo</label>
              <label>Titulo</label>
              <label>Estado</label>
              <label>Cantidad</label>
              <label>Detalles</label>
            </div>

            {this.getItems().map((current) => {
              return <InventoryCard key={current.id} items={current} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
