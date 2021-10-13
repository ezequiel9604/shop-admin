import { useState } from "react";

import "./css-styles/styles.css";
import ChatMessage from "./ChatMessage";
import { ClientsToTalk } from "../../dummyData";

function ChatSidebar() {
  const [clients, setClients] = useState(ClientsToTalk);
  const [selectedClient, setSelectedClient] = useState(0);
  const [isChatSidebarOpen, setIsChatSidebarOpen] = useState(false);

  function changeChatSidebarOpenHandler() {
    setIsChatSidebarOpen(!isChatSidebarOpen);
  }

  function changeSelectedClientHandler(id) {
    setSelectedClient(id);
  }

  function formatClientStatus(status) {
    if (status === "connect") {
      return (
        <span className="usr-status usr-connected" title="Conectado"></span>
      );
    } else if (status === "suspend") {
      return (
        <span className="usr-status usr-suspended" title="Suspendido"></span>
      );
    } else if (status === "offline") {
      return (
        <span className="usr-status usr-offline" title="Fuera de linea"></span>
      );
    } else if (status === "retired") {
      return <span className="usr-status usr-retired" title="Retirado"></span>;
    }
  }

  return (
    <div
      style={isChatSidebarOpen ? { bottom: "0%" } : { bottom: "-78%" }}
      id="chat-sidebar"
    >
      <div className="chat-sidebar-header">
        <button id="btn-show-chat" onClick={changeChatSidebarOpenHandler}>
          <span className="material-icons-outlined">
            {isChatSidebarOpen ? "expand_more" : "expand_less"}
          </span>
        </button>

        <div>
          <figure>
            <img src={clients[selectedClient].image} alt="" />
            {formatClientStatus(clients[selectedClient].status)}
          </figure>
          <figcaption>{clients[selectedClient].name}</figcaption>
        </div>
      </div>

      <div className="chat-sidebar-body">
        <div className="usrs-to-talk-container">
          {clients.map((current, ind) => {
            return (
              <div className="usr-to-talk" key={current.id}>
                <label className="usr-name">{current.name}</label>
                <figure onClick={() => changeSelectedClientHandler(ind)}>
                  {current.unReadMessage > 0 ? (
                    <span className="msg-not-read">
                      {current.unReadMessage}
                    </span>
                  ) : null}
                  <img src={current.image} alt="" />
                  {formatClientStatus(current.status)}
                </figure>
              </div>
            );
          })}
        </div>

        <div id="chat-send-received-msg-container">
          
          <div className="bubbles-container">

            <ChatMessage client={clients[selectedClient]} />

          </div>

          <div id="chat-send-msg-container">
            <input type="text" id="inp-msg" placeholder="Escribe un mensaje!" />
            <button type="button" id="btn-send-msg">
              <span className="material-icons-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSidebar;
