import { Component } from 'react';
import { Link } from 'react-router-dom';

import './css-styles/styles.css';

import ManAvatar from '../../images/placeholder-man.png';


class Aside extends Component {

    constructor(props){
        super(props);

        this.state = {
            isGeneralsOpen: false,
            isStatsOpen: false,
            isChartsOpen: false
        }

        this.changeStatePanel = this.changeStatePanel.bind(this);

    }

    changeStatePanel(id){

        if(id === 1){
            this.setState((state)=> ({
                isGeneralsOpen: !state.isGeneralsOpen
            }));
        }else if(id === 2){
            this.setState((state)=> ({
                isStatsOpen: !state.isStatsOpen
            }));
        }else if(id === 3){
            this.setState((state)=> ({
                isChartsOpen: !state.isChartsOpen
            }));
        }

    }

    render() { 

        const {isSideBarOpen} = this.props;

        return (  
            <aside id="main-sidebar" style={(isSideBarOpen)? {left:'0'} : null} >
	
                <div className="sidebar-header">	
                    <img src={ManAvatar} alt='' />
                    <h3 className="sidebar-admin-name">Ezequiel Diaz Peña</h3>
                </div>	

                <div className="sidebar-body">		

                    <button className="btn-sidebar-accordion">
                        <Link to="/">
                            <span className="material-icons-outlined">dashboard</span>Inicio
                        </Link>
                    </button>

                    <button onClick={()=> this.changeStatePanel(1)} 
                        className="btn-sidebar-accordion">
                        <label>
                            <span className="material-icons-outlined">apps</span> Generales
                        </label>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                    <ul style={(this.state.isGeneralsOpen)? {maxHeight: '106px'}:{maxHeight: '0'}} 
                        className="sidebar-panel">
                        <Link to="/" className="sidebar-panel-links">Pedido</Link>
                        <Link to="/" className="sidebar-panel-links">Usuario</Link>
                        <Link to="/" className="sidebar-panel-links">Inventario</Link>
                        <Link to="/" className="sidebar-panel-links">Comentario</Link>
                    </ul>

                    <button onClick={()=> this.changeStatePanel(2)} 
                        className="btn-sidebar-accordion">
                        <label>
                            <span className="material-icons-outlined">query_stats</span>Estadisticas
                        </label>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                    <ul style={(this.state.isStatsOpen)? {maxHeight: '106px'}:{maxHeight: '0'}}  
                        className="sidebar-panel">
                        <Link to="/" className="sidebar-panel-links">Pedidos</Link>
                        <Link to="/" className="sidebar-panel-links">Usuarios</Link>
                        <Link to="/" className="sidebar-panel-links">Inventario</Link>
                        <Link to="/" className="sidebar-panel-links">Visitas</Link>
                    </ul>

                    <button onClick={()=> this.changeStatePanel(3)} 
                        className="btn-sidebar-accordion">
                        <label>
                            <span className="material-icons-outlined">add_box</span>Agregar / Quitar Caract.
                        </label>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                    <ul style={(this.state.isChartsOpen)? {maxHeight: '106px'}:{maxHeight: '0'}}  
                        className="sidebar-panel">
                        <Link to="/" className="sidebar-panel-links">Marcas</Link>
                        <Link to="/" className="sidebar-panel-links">Colores</Link>
                        <Link to="/" className="sidebar-panel-links">Capacidades</Link>
                        <Link to="/" className="sidebar-panel-links">Tamaño</Link>
                        <Link to="/" className="sidebar-panel-links">Materiales</Link>
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
}
 
export default Aside;