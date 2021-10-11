import { Link } from "react-router-dom";
import "./css-style/styles.css";

function Notification(props) {
  return (
    <div id="notification-modal-container">
      <div id="notification">
        <div className="notification-header">
          <h3>Notificaciónes</h3>
          <button onClick={() => props.onIsNotificationOpen()}>
            <span className="material-icons-sharp">close</span>
          </button>
        </div>
        <div className="notification-body">
          {props.notifications.map((current) => {
            return (
              <div key={current.id}>
                <Link to="/">{current.text}</Link>
                <button
                  onClick={() => props.onRemoveNotification(current.id)}
                  className="btn-remove-notification"
                >
                  <span className="material-icons-outlined">cancel</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notification;
