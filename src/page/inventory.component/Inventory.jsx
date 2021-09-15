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
          status: "n",
          gender: "a",
          stock: 25,
          quality: 4.8,
          department: 'Tecnologia',
          brand: 'Samsung',
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
          status: "u",
          gender: "a",
          stock: 20,
          quality: 4.8,
          department: 'Tecnologia',
          brand: 'Samsung',
          subItems: [
            {
              size: '24"',
              color: "Black",
              capacity: "2GBs",
              stock: 15,
              purchasedPrice: 1200,
              sellPrice: 1850,
              offerPrice: 1700,
            },
            {
              size: '17"',
              color: "Gray",
              capacity: "2GBs",
              stock: 5,
              purchasedPrice: 950,
              sellPrice: 1450,
              offerPrice: 1350,
            },
          ],
        }
      ],
    };
  }

  render() {
    return (
      <div id="inventory">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Inventario</h2>
          </div>
        </div>

        <FilterInventory />

        <div className="box-container">
          <div className="box box-table box-table-invetory">
            <div className="box-table-head">
              <label>Imagen / Codigo</label>
              <label>Titulo</label>
              <label>Estado</label>
              <label>Cantidad</label>
              <label>Detalles</label>
            </div>

            {this.state.items.map((current)=> {
              return <InventoryCard key={current.id} items={current} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
