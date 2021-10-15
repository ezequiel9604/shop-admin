import { useState, useEffect, useContext } from "react";

import "./css-styles/styles.css";
import ChatMessage from "./ChatMessage";
import Loading from "../../page/loading.component/Loading";
import { AdminContext } from "../../store/AdminContext";
import { Clients, Messages } from "../../dummyData";

function ChatSidebar() {
  const [clients, setClients] = useState(Clients);
  const [messages, setMessage] = useState(null);
  const [selectedClient, setSelectedClient] = useState(0);
  const [isChatSidebarOpen, setIsChatSidebarOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const Admin = useContext(AdminContext);

  useEffect(()=>{
    setMessage(Messages);
  },[]);

  function changeChatSidebarOpenHandler() {
    setIsChatSidebarOpen(!isChatSidebarOpen);
  }

  function changeSelectedClientHandler(id) {
    setSelectedClient(id);
  }

  function formatClientStatus(status) {
    if (status === "connected") {
      return (
        <span className="usr-status usr-connected" title="Conectado"></span>
      );
    } else if (status === "suspended") {
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

  function changeMessageInput(event) {
    setMessageInput(event.target.value);
  }

  function sendMessageToClient() {
    if(messageInput !== ""){
      const response = {
        id: "CSV-972384",
        text: messageInput,
        date: new Date(),
        clientId: clients[selectedClient].id,
        adminId: Admin.id,
        type: "response",
      };
      const arr = [...messages];
      arr.push(response);
      setMessage(arr);
      setMessageInput("");
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
          
          {messages? 
            (<ChatMessage
              client={clients[selectedClient]}
              admin={Admin}
              messages={messages}
            />)
            :
            (<Loading title='Mensajes' />)
          }

          <div id="chat-send-msg-container">
            <input
              onChange={changeMessageInput}
              value={messageInput}
              type="text"
              id="inp-msg"
              placeholder="Escribe un mensaje!"
            />
            <button
              onClick={sendMessageToClient}
              type="button"
              id="btn-send-msg"
            >
              <span className="material-icons-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSidebar;
