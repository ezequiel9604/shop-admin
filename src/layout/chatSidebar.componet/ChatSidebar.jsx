import { Component } from "react";

import "./css-styles/styles.css";

import WomanAvatar from "../../images/placeholder-woman.png";
import ManAvatar from "../../images/placeholder-woman.png";
import UserImage from '../../images/user-image.jpg';

class ChatSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientsToTalk: [
        {
          id: "USR-025789",
          image: UserImage,
          name: "Natalie Portman",
          status: "c",
          unReadMessage: 2,
        },
        {
          id: "USR-025147",
          image: ManAvatar,
          name: "Will Smith",
          status: "s",
          unReadMessage: 3,
        },
        {
          id: "USR-025100",
          image: WomanAvatar,
          name: "Scarlet Johanson",
          status: "f",
          unReadMessage: 1,
        },
        {
          id: "USR-025371",
          image: ManAvatar,
          name: "Morgan Freeman",
          status: "c",
          unReadMessage: 0,
        },
      ],
      selectedClient: 0,
      isChatSidebarShown: false,
    };

    this.switchChatSidebarShown = this.switchChatSidebarShown.bind(this);
    this.changeSelectedClientHandler = this.changeSelectedClientHandler.bind(this);
  }

  switchChatSidebarShown() {
    this.setState((state) => ({
      isChatSidebarShown: !state.isChatSidebarShown,
    }));
  }

  formatClientStatus(status) {
    if (status === "c") {
      return (
        <span className="usr-status usr-connected" title="Conectado"></span>
      );
    } else if (status === "s") {
      return (
        <span className="usr-status usr-suspended" title="Suspendido"></span>
      );
    } else if (status === "f") {
      return (
        <span className="usr-status usr-offline" title="Fuera de linea"></span>
      );
    } else if (status === "r") {
      return <span className="usr-status usr-retired" title="Retirado"></span>;
    }
  }

  changeSelectedClientHandler(id){
    this.setState({selectedClient: id });
  }

  render() {
    const { selectedClient } = this.state;
    const { clientsToTalk } = this.state;

    return (
      <div
        style={
          this.state.isChatSidebarShown ? { bottom: "0%" } : { bottom: "-78%" }
        }
        id="chat-sidebar"
      >
        <div className="chat-sidebar-header">
          <button
            onClick={this.switchChatSidebarShown}
            type="button"
            id="btn-show-chat"
          >
            <span className="material-icons-outlined">
              {this.state.isChatSidebarShown ? "expand_more" : "expand_less"}
            </span>
          </button>

          <div>
            <figure>
              <img src={clientsToTalk[selectedClient].image} alt="" />
              {this.formatClientStatus(clientsToTalk[selectedClient].status)}
            </figure>
            <figcaption>{clientsToTalk[selectedClient].name}</figcaption>
          </div>
        </div>

        <div className="chat-sidebar-body">
          <div className="usrs-to-talk-container">
            {clientsToTalk.map((current, ind) => {
              return (
                <div className="usr-to-talk" key={current.id}>
                  <label className="usr-name">{current.name}</label>
                  <figure onClick={()=>this.changeSelectedClientHandler(ind)}>
                    {current.unReadMessage > 0 ? (
                      <span className="msg-not-read">
                        {current.unReadMessage}
                      </span>
                    ) : null}
                    <img src={current.image} alt="" />
                    {this.formatClientStatus(current.status)}
                  </figure>
                </div>
              );
            })}
          </div>

          <div id="chat-send-received-msg-container">
            <div className="bubbles-container">
              <div className="bubbles-user">
                <figure>
                  <img src={WomanAvatar} alt="" />
                </figure>
                <div className="usr-msgs">
                  <p>
                    Lorem ipsum dolor sit, amet, consectetur adipisicing elit.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure earum, atque, dolor similique odio est distinctio nisi
                    accusamus laudantium.
                  </p>
                  <time>un dia atras</time>
                </div>
              </div>

              <div className="bubbles-admin">
                <div className="admin-msgs">
                  <p>
                    Lorem ipsum dolor sit, amet, consectetur adipisicing elit.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure earum, atque, dolor similique odio est distinctio nisi
                    accusamus laudantium.
                  </p>
                  <time>un dia atras</time>
                </div>
              </div>
            </div>

            <div id="chat-send-msg-container">
              <input
                type="text"
                id="inp-msg"
                placeholder="Escribe un mensaje!"
              />
              <button type="button" id="btn-send-msg">
                <span className="material-icons-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatSidebar;
