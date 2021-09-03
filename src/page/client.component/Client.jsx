import React, { Component } from "react";

import ClientsCard from "./ClientsCard";

import './css-styles/styles.css';

import ManAvatar from '../../images/placeholder-man.png';
import WomanAvatar from '../../images/placeholder-woman.png';

class Client extends Component {
    
    constructor(props) {

        super(props);
        
        this.state = {  
            Clients: [
                {   id: 'USR-025456', name: 'Sarah Doe', email: 'sarahdoe@gmail.com', 
                    image: WomanAvatar, gender: 'F', status: 'C', type: 'N', phone: '809-111-0000',
                    birthday: '1997-05-02', password: 'mypassword', streetNumber: 8,
                    streetName: 'Francisco Henriquez y Carvajal', hood: 'Brisas del Este',
                    city: 'Santo Domingo Este'
                },
                {   id: 'USR-025941', name: 'John Doe', email: 'johndoe@gmail.com', 
                    image: ManAvatar, gender: 'M', status: 'F', type: 'E', phone: '809-222-0000',
                    birthday: '1996-08-12', password: 'mypassword', streetNumber: 8,
                    streetName: 'Francisco Henriquez y Carvajal', hood: 'Brisas del Este',
                    city: 'Santo Domingo Este'
                },
                {   id: 'USR-025965', name: 'Maria Perez', email: 'mariaperez@gmail.com', 
                    image: WomanAvatar, gender: 'F', status: 'S', type: 'N', phone: '809-222-0000',
                    birthday: '1995-01-20', password: 'mypassword', streetNumber: 8,
                    streetName: 'Francisco Henriquez y Carvajal', hood: 'Brisas del Este',
                    city: 'Santo Domingo Este'
                },
                {   id: 'USR-025408', name: 'Mike Doe', email: 'mikedoe@gmail.com', 
                    image: ManAvatar, gender: 'M', status: 'R', type: 'N', phone: '809-222-0000',
                    birthday: '1995-12-10', password: 'mypassword', streetNumber: 8,
                    streetName: 'Francisco Henriquez y Carvajal', hood: 'Brisas del Este',
                    city: 'Santo Domingo Este'
                }
            ]
        }

    }


    render() {

        const { Clients } = this.state;

        return (  
            
            <div className="box-container">
                
                <div className="box box-table">
                        
                    <div className="box-table-head">
                        <label>Imagen / Codigo</label>
                        <label>Nombre</label>
                        <label>Email</label>
                        <label>Genero</label>
                        <label>Estado</label>
                        <label>Detalles</label>
                    </div>

                    {Clients.map((val, id) => {
                        return <ClientsCard clients={val} key={id} />
                    })}	

                </div>

            </div>
        );
    }
}
 
export default Client;