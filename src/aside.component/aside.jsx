import React, { Component } from 'react';

import adminImage from '../images/paris.jpg';

import './styles/styles.css';

class Aside extends Component {
    state = {  
        cancelations: [
            {id:1},{id:2},{id:3},{id:4},{id:5}
        ],
        returns: [
            {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}
        ],
        chat: [
            {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},
            {id:11},{id:12},{id:13},{id:14},{id:15}
        ],

    }

    checkIndicators(num){
        if(num <= 5)
            return "small-number";
        if(num <= 10)
            return "medium-number";
            
        return "large-number";
    }

    render() { 
        return (  
            <aside id="main-aside">
	
                <div className="header">	

                   {/** <img src={adminImage} /> */}
                    <span className="material-icons-outlined">account_circle</span>

                    <h2>Bienvenido, Ezequiel Diaz Peña</h2>
                    
                </div>	

                <div className="section">		

                    <button className="accordion">
                        <a href="#"><span className="material-icons-outlined">dashboard</span>Inicio</a>
                    </button>
                    <div className="panel"></div>

                    <button className="accordion">
                        <label><span className="material-icons-outlined">apps</span> Generales</label>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                    <div className="panel">
                        <a href="#">Pedido</a>
                            <a href="#">Usuario</a>
                            <a href="#">Articulo</a>
                            <a href="#">Comentario</a>
                    </div>

                    <button className="accordion">
                        <label><span className="material-icons-outlined">query_stats</span>Estadisticas</label>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                    <div className="panel">
                        <a href="#">Pedidos</a>
                            <a href="#">Usuarios</a>
                            <a href="#">Inventario</a>
                            <a href="#">Comentarios</a>
                            <a href="#">Visitas</a>
                    </div>

                    <button className="accordion">
                        <label><span className="material-icons-outlined">add_box</span>Agregar / Quitar Caract.</label>
                        <span className="material-icons-outlined">expand_more</span>
                    </button>
                    <div className="panel">
                        <a href="#">Marcas</a>
                            <a href="#">Colores</a>
                            <a href="#">Capacidades</a>
                            <a href="#">Tamaño</a>
                            <a href="#">Materiales</a>
                            <a href="#">Resoluciones</a>
                    </div>

                    <button className="accordion">
                        <a href="#">
                            <span className="material-icons-outlined">highlight_off</span>Cancelaciones
                        </a>
                        <strong className={this.checkIndicators(this.state.cancelations.length)}>{this.state.cancelations.length}</strong>
                    </button>
                    <div className="panel"></div>

                    <button className="accordion">
                        <a href="#">
                            <span className="material-icons-outlined">assignment_return</span>Devoluciones
                        </a>
                        <strong className={this.checkIndicators(this.state.returns.length)}>{this.state.returns.length}</strong>
                    </button>
                    <div className="panel"></div>

                    <button className="accordion">
                        <a href="#"><span className="material-icons-outlined">chat</span>Chat</a>
                        <strong className={this.checkIndicators(this.state.chat.length)}>{this.state.chat.length}</strong>
                    </button>
                    <div className="panel"></div>

                </div>
            </aside>	
        );
    }
}
 
export default Aside;