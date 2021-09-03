import { Component } from "react";

import GeneralsOverview from './generalsOverview.component/GeneralsOverview';
import TimeOverview from './timeOverview.component/TimeOverview';
import ViewsOverview from './viewsOverview.component/ViewsOverview';
import UserOverview from './userOverview.component/UserOverview';

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            Entities: [
                { id: 1,name: 'Pedidos', icon: 'shopping_bag', 
                    CurrentWeekTotal: 5435, PreviousWeekTotal: 5310},
                { id: 2,name: 'Usuarios', icon: 'person', 
                    CurrentWeekTotal: 180, PreviousWeekTotal: 171},
                { id: 3,name: 'Inventario', icon: 'inventory', 
                    CurrentWeekTotal: 210, PreviousWeekTotal: 259},
                { id: 4,name: 'Comentarios', icon: 'comment', 
                    CurrentWeekTotal: 420, PreviousWeekTotal: 387},
                { id: 5,name: 'Expresos', icon: 'local_shipping', 
                    CurrentWeekTotal: 5751, PreviousWeekTotal: 5698},
            ]
        }

    }

    render() { 
        
        return ( 
            <div>
                <TimeOverview />

                <GeneralsOverview entities={this.state.Entities} />

                <ViewsOverview />

                <UserOverview />
            </div>
        );
    }
}
 
export default Home;