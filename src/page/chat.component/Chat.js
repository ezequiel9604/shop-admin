import { useState, useContext, useEffect } from "react";

import "./css-styles/styles.css";
import ChatMessage from "./ChatMessage";
import Loading from "../loading.component/Loading";
import { Clients, Messages } from "../../dummyData";
import { AdminContext } from "../../store/AdminContext";

function Chat(props) {
  const [clients, setClients] = useState(null);
  const [messages, setMessages] = useState(null);
  const [selectedClient, setSelectedClient] = useState(0);
  const [infoUserShow, setInfoUserShow] = useState(false);
  const admin = useContext(AdminContext);

  useEffect(() => {
    setClients(Clients);
    setMessages(Messages);
  }, []);

  function formatClientStatus(status) {
    if (status === "connected") {
      return (
        <mark className="usr-status usr-connected" title="Conectado"></mark>
      );
    } else if (status === "suspended") {
      return (
        <mark className="usr-status usr-suspended" title="Suspendido"></mark>
      );
    } else if (status === "offline") {
      return (
        <mark className="usr-status usr-offline" title="Fuera de linea"></mark>
      );
    } else if (status === "retired") {
      return <mark className="usr-status usr-retired" title="Retirado"></mark>;
    }
  }

  function changeSetSelectedClient(index) {
    setSelectedClient(index);
  }

  function changeInfoUserShow() {
    setInfoUserShow(!infoUserShow);
  }

  function getLastInteraction(clientid) {
    let lastDate = new Date("1990-01-01T00:00:00Z");
    messages.map((current) => {
      if (current.clientId === clientid) {
        if (new Date(current.date) > lastDate) {
          lastDate = new Date(current.date);
        }
      }
    });
    return lastDate.toLocaleDateString();
  }

  return (
    <div id="chat">
      <div className="box-container">
        <div className="box box-header">
          <h2>Chat online</h2>
        </div>
      </div>

      <div className="box-container">
        {clients ? (
          <div className="box box-chat">
            <div className="contacts">
              <div className="contact-header">
                <figure>
                  <img src={admin.image} alt="" />
                  <strong>{admin.name}</strong>
                </figure>
              </div>

              {messages ? (
                <div className="contact-section">
                  {clients.map((current, ind) => {
                    return (
                      <article key={current.id}>
                        <figure>
                          <mark className="msg-not-read">0</mark>
                          <img src={current.image} alt="" />
                          {formatClientStatus(current.status)}
                          <strong>{current.name}</strong>
                        </figure>
                        <time>{getLastInteraction(current.id)}</time>
                        <button onClick={() => changeSetSelectedClient(ind)}>
                          {current.id === clients[selectedClient].id ? (
                            <span className="material-icons-outlined">
                              radio_button_checked
                            </span>
                          ) : (
                            <span className="material-icons-outlined">
                              radio_button_unchecked
                            </span>
                          )}
                        </button>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="contact-section">
                  {clients.map((current, ind) => {
                    return (
                      <article key={current.id}>
                        <figure>
                          <mark className="msg-not-read">0</mark>
                          <img src={current.image} alt="" />
                          {formatClientStatus(current.status)}
                          <strong>{current.name}</strong>
                        </figure>
                        <button onClick={() => changeSetSelectedClient(ind)}>
                          {current.id === clients[selectedClient].id ? (
                            <span className="material-icons-outlined">
                              radio_button_checked
                            </span>
                          ) : (
                            <span className="material-icons-outlined">
                              radio_button_unchecked
                            </span>
                          )}
                        </button>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="messages">
              <div className="messages-header">
                <figure>
                  <img src={clients[selectedClient].image} alt="" />
                  <strong>{clients[selectedClient].name}</strong>
                </figure>
                <button className="btn-show-more-options">
                  <span className="material-icons-outlined">more_vert</span>

                  <div className="dropdown-messages-chat">
                    <li onClick={changeInfoUserShow}>Info usuario</li>
                    <li>Borrar mensajes</li>
                  </div>
                </button>
              </div>

              {messages ? (
                <ChatMessage
                  client={clients[selectedClient]}
                  admin={admin}
                  messages={messages}
                />
              ) : (
                <Loading />
              )}

              <div className="messages-footer">
                <input type="text" placeholder="Escribe un mensaje..." />
                <button>
                  <span className="material-icons-outlined">send</span>
                </button>
              </div>
            </div>

            <div
              className="info-user"
              style={infoUserShow ? { right: "0" } : { right: "-42%" }}
            >
              <div className="contact-header">
                <button onClick={changeInfoUserShow}>
                  <span className="material-icons-outlined">close</span>
                </button>
                <h3>Informacion del usuario</h3>
                <div></div>
              </div>

              <div className="contact-section">
                <div className="img-info-user">
                  <img src={clients[selectedClient].image} alt="" />
                  <h4>
                    {clients[selectedClient].id +
                      " " +
                      clients[selectedClient].name}
                  </h4>
                  <h4>{clients[selectedClient].email}</h4>
                </div>

                <ul className="list-info-user">
                  <li>
                    <label>Tipo:</label>
                    <p>{clients[selectedClient].type}</p>
                  </li>
                  <li>
                    <label>Genero:</label>
                    <p>{clients[selectedClient].gender}</p>
                  </li>
                  <li>
                    <label>Telefono:</label>
                    <p>{clients[selectedClient].phone}</p>
                  </li>
                  <li>
                    <label>Fecha de nacimiento:</label>
                    <p>{clients[selectedClient].birthday}</p>
                  </li>
                  <li>
                    <label>Direccion:</label>
                    <p>
                      #
                      {clients[selectedClient].streetNumber +
                        ", " +
                        clients[selectedClient].streetName +
                        ", " +
                        clients[selectedClient].hood +
                        ", " +
                        clients[selectedClient].city}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Chat;
