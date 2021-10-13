import { useState, useEffect } from "react";

import Header from "./header.component/Header";
import Aside from "./aside.component/Aside";
import ChatSidebar from "./chatSidebar.componet/ChatSidebar";
import Notification from "./notification.component/Notification";
import { Notifications } from "../dummyData";

function Layout(props) {
  const [notifications, setNotification] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    setNotification(Notifications);
  }, []);

  function changeSidebarHandler() {
    setSidebarOpen(!isSidebarOpen);
  }

  function changeNotificationHandler() {
    setNotificationOpen(!isNotificationOpen);
  }

  function removingNotificationHandler(id) {
    let arr = [...notifications];
    arr = arr.filter((current) => {
      return current.id !== id;
    });
    setNotification(arr);
  }

  return (
    <div id="outside-container">
      <Aside isSidebarOpen={isSidebarOpen} />

      <div
        id="inside-container"
        style={isSidebarOpen ? { width: "82%", left: "18%" } : null}
      >
        <Header
          onIsSidebarOpen={changeSidebarHandler}
          onNotificationAmount={notifications.length}
          onIsNotificationOpen={changeNotificationHandler}
        />

        <main style={isSidebarOpen ? { width: "82%", left: "18%" } : null}>
          <div className="ctn">{props.children}</div>

          <ChatSidebar />
        </main>
      </div>

      {isNotificationOpen && (
        <Notification
          notifications={notifications}
          onRemoveNotification={removingNotificationHandler}
          onIsNotificationOpen={changeNotificationHandler}
        />
      )}
    </div>
  );
}

export default Layout;
