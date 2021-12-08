import { useState, useEffect } from "react";
import UserResults from "./UserResults";
import ItemResults from "./ItemResults";
import "./css-styles/styles.css";
import { Clients } from "../../../dummyData";
import { Items } from "../../../dummyData";

function AddOrder(props) {
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("code");
  const [filterUsers, setFilterUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  const [itemInput, setItemInput] = useState("");
  const [itemSelect, setItemSelect] = useState("code");
  const [filterItems, setFilterItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [clients, setClients] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setClients(Clients);
    setItems(Items);
  }, []);

  function renderMark(status) {
    if (status === "connected") {
      return <mark className="box-table-success"></mark>;
    } else if (status === "offline") {
      return <mark className="box-table-warning"></mark>;
    } else if (status === "suspended") {
      return <mark className="box-table-cancel"></mark>;
    } else if (status === "retired") {
      return <mark className="box-table-error"></mark>;
    }
  }

  function changeSelectedUser(userId) {
    const chosen = filterUsers.filter((curr) => {
      return curr.id === userId;
    });
    setSelectedUser(chosen[0]);
    setFilterUsers([]);
  }

  function addSelectedItems(itemId, sub) {
    const chosen = filterItems.filter((curr) => {
      return curr.id === itemId && curr.subItems[sub];
    });

    const unique = Math.floor(Math.random() * 1000);
    const arr = [...selectedItems];
    arr.push({
      id: chosen[0].id,
      uniqueKey: chosen[0].id + "-" + unique,
      title: chosen[0].title,
      image: chosen[0].image[0],
      status: chosen[0].status,
      brand: chosen[0].brand,
      department: chosen[0].department,
      size: chosen[0].subItems[sub].size,
      color: chosen[0].subItems[sub].color,
      capacity: chosen[0].subItems[sub].capacity,
      stock: chosen[0].subItems[sub].stock,
      purchasedPrice: chosen[0].subItems[sub].purchasedPrice,
      sellPrice: chosen[0].subItems[sub].sellPrice,
      offerPrice: chosen[0].subItems[sub].offerPrice,
      amount: 1,
    });
    setSelectedItems(arr);
    setFilterItems([]);
  }

  function setAmountOfSelectedItems(key, amount) {
    const arr = [...selectedItems];
    arr.forEach((curr) => {
      if (curr.uniqueKey === key) {
        curr.amount = parseInt(amount);
      }
    });
    setSelectedItems(arr);
  }

  function removeSelectedItems(key) {
    const arr = [...selectedItems].filter((curr) => {
      return curr.uniqueKey !== key;
    });
    setSelectedItems(arr);
  }

  function searchUserHandler() {
    const allclients = [...clients];
    if (userSelect === "code") {
      setFilterUsers(
        allclients.filter((curr) => {
          return curr.id === userInput;
        })
      );
    } else if (userSelect === "name") {
      setFilterUsers(
        allclients.filter((curr) => {
          let coincidences = curr.name.toLowerCase().indexOf(userInput);
          return coincidences > -1 ? curr : null;
        })
      );
    }
  }

  function searchItemHandler() {
    const allitems = [...items];
    if (itemSelect === "code") {
      setFilterItems(
        allitems.filter((curr) => {
          return curr.id === itemInput;
        })
      );
    } else if (itemSelect === "title") {
      setFilterItems(
        allitems.filter((curr) => {
          let coincidences = curr.title.toLowerCase().indexOf(itemInput);
          return coincidences > -1 ? curr : null;
        })
      );
    }
  }

  return (
    <div id="add-order">
      <div className="box-container">
        <div className="box box-header">
          <h2>Crear pedido</h2>
        </div>
      </div>

      <div className="box-container">
        <div className="box box-add-item">
          <form>
            <div className="filter-1 user-art-filters">
              <div>
                <select onChange={(ev) => setUserSelect(ev.target.value)}>
                  <option value="code">Codigo</option>
                  <option value="name">Nombre</option>
                </select>
                <article>
                  <input
                    onChange={(ev) => setUserInput(ev.target.value)}
                    value={userInput}
                    type="text"
                    placeholder="Codigo, Nombre"
                  />
                  {filterUsers.length ? (
                    <ul>
                      {filterUsers.map((current) => {
                        return (
                          <li
                            key={current.id}
                            onClick={() => {
                              changeSelectedUser(current.id);
                            }}
                          >
                            {current.id}; {current.name}; {current.type};{" "}
                            {current.email}; {renderMark(current.status)}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </article>
                <button onClick={searchUserHandler} type="button">
                  Buscar
                </button>
              </div>
            </div>

            <UserResults user={selectedUser} />

            <div className="filter-1 user-art-filters">
              <div>
                <select onChange={(ev) => setItemSelect(ev.target.value)}>
                  <option value="code">Codigo</option>
                  <option value="title">Titulo</option>
                </select>
                <article>
                  <input
                    onChange={(ev) => setItemInput(ev.target.value)}
                    value={itemInput}
                    type="text"
                    placeholder="Codigo"
                  />
                  {filterItems.length ? (
                    <ul>
                      {filterItems.map((current) => {
                        return (
                          <span key={current.id}>
                            {current.subItems.map((sub, ind) => {
                              return (
                                <li
                                  key={current.id + "" + ind}
                                  onClick={() => {
                                    addSelectedItems(current.id, ind);
                                  }}
                                >
                                  {current.id} / {current.title} / {sub.size} /{" "}
                                  {sub.color} / {sub.capacity}{" "}
                                </li>
                              );
                            })}
                          </span>
                        );
                      })}
                    </ul>
                  ) : null}
                </article>
                <button onClick={searchItemHandler} type="button">
                  Buscar
                </button>
              </div>
            </div>

            <div className="results-arts-container">
              <div className="box-inside-table-head">
                <label>Articulo</label>
                <label>Detalles</label>
                <label>Cantidad</label>
                <label>Subtotal</label>
                <label>Remover</label>
              </div>
              {selectedItems.map((current) => {
                return (
                  <ItemResults
                    key={current.uniqueKey}
                    item={current}
                    onSetAmount={setAmountOfSelectedItems}
                    onRemoveSelectedItem={removeSelectedItems}
                  />
                );
              })}
            </div>

            <br />
            <div className="action-buttons">
              <button type="button">Siguiente</button>
              <button type="button">Borrar todo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
