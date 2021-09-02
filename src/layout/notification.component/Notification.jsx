
import { Link } from "react-router-dom";

import './css-style/styles.css';

import React from 'react';

function Notification(props) {
    return (  
        <div id="notification-modal-container">
            <div id="notification">
                <div className="notification-header">
                    <h3>Notificaciónes</h3>
                    <button onClick={()=> props.onIsNotificationOpen()}>
                        <span className="material-icons-sharp">close</span>
                    </button>
                </div>	
                <div className="notification-body">

                {props.notifications.map((val) => {

                    return (
                        <div key={val.id}>
                            <Link to='/'>{val.text}</Link>
                            <button onClick={()=>props.onRemoveNotification(val.id)} 
                                className="btn-remove-notification">
                                <span className="material-icons-outlined">cancel</span>
                            </button>
                        </div>
                    )

                })}

                </div>	
            </div>	
        </div>
    );
}

export default Notification;

