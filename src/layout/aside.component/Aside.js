import { useState } from "react";
import { Link } from "react-router-dom";

import "./css-styles/styles.css";
import ManAvatar from "../../images/placeholder-man.png";

function Aside(props) {
  const [isGeneralsOpen, setIsGeneralsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isChartsOpen, setIsChartsOpen] = useState(false);

  function changeStatePanelHandler(id) {
    if (id === 1) {
      setIsGeneralsOpen(!isGeneralsOpen);
    } else if (id === 2) {
      setIsStatsOpen(!isStatsOpen);
    } else if (id === 3) {
      setIsChartsOpen(!isChartsOpen);
    }
  }

  return (
    <aside id="main-sidebar" style={props.isSidebarOpen ? { left: "0" } : null}>
      <div className="sidebar-header">
        <img src={ManAvatar} alt="" />
        <h3 className="sidebar-admin-name">Ezequiel Diaz Peña</h3>
      </div>

      <div className="sidebar-body">
        <button className="btn-sidebar-accordion">
          <Link to="/">
            <span className="material-icons-outlined">dashboard</span>Inicio
          </Link>
        </button>

        <button
          onClick={() => changeStatePanelHandler(1)}
          className="btn-sidebar-accordion"
        >
          <label>
            <span className="material-icons-outlined">apps</span> Generales
          </label>
          <span className="material-icons-outlined">expand_more</span>
        </button>
        <ul
          style={isGeneralsOpen ? { maxHeight: "106px" } : { maxHeight: "0" }}
          className="sidebar-panel"
        >
          <Link to="/orders" className="sidebar-panel-links">
            Pedido
          </Link>
          <Link to="/clients" className="sidebar-panel-links">
            Usuario
          </Link>
          <Link to="/inventory" className="sidebar-panel-links">
            Inventario
          </Link>
          <Link to="/comments" className="sidebar-panel-links">
            Comentario
          </Link>
        </ul>

        <button
          onClick={() => changeStatePanelHandler(2)}
          className="btn-sidebar-accordion"
        >
          <label>
            <span className="material-icons-outlined">query_stats</span>
            Estadisticas
          </label>
          <span className="material-icons-outlined">expand_more</span>
        </button>
        <ul
          style={isStatsOpen ? { maxHeight: "106px" } : { maxHeight: "0" }}
          className="sidebar-panel"
        >
          <Link to="/" className="sidebar-panel-links">
            Pedidos
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Usuarios
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Inventario
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Visitas
          </Link>
        </ul>

        <button
          onClick={() => changeStatePanelHandler(3)}
          className="btn-sidebar-accordion"
        >
          <label>
            <span className="material-icons-outlined">add_box</span>Agregar /
            Quitar Caract.
          </label>
          <span className="material-icons-outlined">expand_more</span>
        </button>
        <ul
          style={isChartsOpen ? { maxHeight: "106px" } : { maxHeight: "0" }}
          className="sidebar-panel"
        >
          <Link to="/" className="sidebar-panel-links">
            Marcas
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Colores
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Capacidades
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Tamaño
          </Link>
          <Link to="/" className="sidebar-panel-links">
            Materiales
          </Link>
        </ul>

        <button className="btn-sidebar-accordion">
          <Link to="/canceledOrders">
            <span className="material-icons-outlined">highlight_off</span>
            Cancelaciones
          </Link>
          <strong className="small-number">2</strong>
        </button>

        <button className="btn-sidebar-accordion">
          <Link to="/returnedOrders">
            <span className="material-icons-outlined">assignment_return</span>
            Devoluciones
          </Link>
          <strong className="medium-number">5</strong>
        </button>

        <button className="btn-sidebar-accordion">
          <Link to="/chat">
            <span className="material-icons-outlined">chat</span>Chat
          </Link>
          <strong className="large-number">10</strong>
        </button>
      </div>
    </aside>
  );
}

export default Aside;
