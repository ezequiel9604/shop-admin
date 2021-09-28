import { Component } from "react";

import Header from "./header.component/Header";
import Aside from "./aside.component/Aside";
import ChatSidebar from "./chatSidebar.componet/ChatSidebar";
import Notification from "./notification.component/Notification";

class Layout extends Component {
  constructor(props) {
    super(props);

    const txt =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
      "dolor sit amet consectetur, adipisicing elit.";

    this.state = {
      notifications: [
        { id: "noti001", text: "1 " + txt },
        { id: "noti002", text: "2 " + txt },
        { id: "noti003", text: "3 " + txt },
        { id: "noti004", text: "4 " + txt },
        { id: "noti005", text: "5 " + txt },
        { id: "noti006", text: "6 " + txt },
      ],

      isSideBarOpen: true,
      isNotificationOpen: false,
    };

    this.switchSideBarHandler = this.switchSideBarHandler.bind(this);
    this.switchNotificationHandler = this.switchNotificationHandler.bind(this);
    this.removeNotificationHandler = this.removeNotificationHandler.bind(this);
  }

  switchSideBarHandler() {
    this.setState((state) => ({
      isSideBarOpen: !state.isSideBarOpen,
    }));
  }

  switchNotificationHandler() {
    this.setState((state) => ({
      isNotificationOpen: !state.isNotificationOpen,
    }));
  }

  removeNotificationHandler(id) {
    const newArr = this.state.notifications.filter((current) => {
      return current.id !== id;
    });
    this.setState({ notifications: newArr });
  }

  render() {
    const { notifications } = this.state;
    const { isSideBarOpen } = this.state;

    return (
      <div id="outside-container">
        <Aside isSideBarOpen={isSideBarOpen} />

        <div
          id="inside-container"
          style={isSideBarOpen ? { width: "82%", left: "18%" } : null}
        >
          <Header
            onIsSidebarOpen={this.switchSideBarHandler}
            onNotificationAmount={notifications.length}
            onIsNotificationOpen={this.switchNotificationHandler}
          />

          <main style={isSideBarOpen ? { width: "82%", left: "18%" } : null}>
            <div className="ctn">
              {this.props.children}
            </div>

            <ChatSidebar />
          </main>
        </div>

        {this.state.isNotificationOpen && (
          <Notification notifications={notifications}
            onRemoveNotification={this.removeNotificationHandler}
            onIsNotificationOpen={this.switchNotificationHandler}
          />
        )}
      </div>
    );
  }
}

export default Layout;
