import { Link } from "react-router-dom";
import "./css-styles/styles.css";

function Header(props) {
  return (
    <header id="main-header">
      <div className="logo-container">
        <button onClick={() => props.onIsSidebarOpen()} id="btn-hide-sidebar">
          <span className="material-icons-outlined">menu_open</span>
        </button>
        <Link to="/" className="logo-title">
          ShopSite
        </Link>
      </div>

      <div className="btn-options-container">
        <button id="btn-dropdown-settings">
          <span className="material-icons-sharp ">settings</span>
          <ul className="dropdown-settings">
            <Link to="/profile" className="setting-links">
              Ver perfil
            </Link>
            <Link to="/" className="setting-links">
              Agregar admin
            </Link>
            <Link to="/" className="setting-links">
              Cerrar sessión
            </Link>
          </ul>
        </button>

        <button
          onClick={() => props.onIsNotificationOpen()}
          id="btn-show-notification"
          className={
            props.onNotificationAmount > 0 ? "notification-animation" : null
          }
        >
          <span className="material-icons-sharp">notifications_active</span>
          <i>{props.onNotificationAmount}</i>
        </button>
      </div>
    </header>
  );
}

export default Header;
