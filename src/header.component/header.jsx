import React, { Component } from 'react';
import './styles/styles.css';

import logo from '../images/logo-header.png';

class Header extends Component {
    state = { 
        notifications: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 }
        ]
    };

    checkNewNotifications(){
        return this.state.notifications.length > 0? 'notifications-on' : null;
    }

    render() { 
        return (  
            <header id="main-header">		

                <div className="header-container">	

                    <div className="logo">
                        <button type="button" id="btn-hide-sidebar">
                            <span className="material-icons-outlined">menu_open</span>
                        </button>
                        <img src={logo} />
                    </div>

                    <div className="btn-options-container">

                        <button type="button" id="btn-settings">
                            <span className="material-icons-sharp ">settings</span>
                            <ul className="dropdown">
                               {/**  <div className="pointer"></div>  */}
                                <a href="#">Mi perfil</a>
                                <a href="#">Agregar admin</a>
                                <a href="#">Cerrar sessión</a>
                            </ul>
                        </button>

                        <button type="button" className={this.checkNewNotifications()}>
                            <span className="material-icons-sharp">notifications_active</span>
                            <i>{this.state.notifications.length}</i>
                        </button>

                    </div>	
                    
                </div>	

            </header>
        );
    }
}
 
export default Header;