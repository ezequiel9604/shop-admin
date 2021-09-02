import { Component } from "react";
import { Link } from "react-router-dom";

import './css-styles/styles.css';

class GeneralsOverview extends Component {

    constructor(props) {
        
        super(props);

        this.state = { 

            DummyData: [
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

        };

        this.calculatePercent = this.calculatePercent.bind(this);

    }

    calculatePercent(previous, current){

        let total = (current - previous) / current;

        let porcent = (total * 100).toFixed(1);

        return porcent;

    }

    render() { 

        const {DummyData} = this.state;

        return (  
	
            <div className="box-container box-overview">
                
                {DummyData.map((val) => {
                    return (
                        <div className="box box-entities" key={val.id}>
                            <div>
                                <Link to='/'>{val.name}</Link>
                                <strong>{val.CurrentWeekTotal}</strong>
                                {(this.calculatePercent(val.PreviousWeekTotal, val.CurrentWeekTotal) < 0)? 
                                <p className="decrease">
                                   {(val.CurrentWeekTotal-val.PreviousWeekTotal)} &nbsp;
                                   (<span className="material-icons">south</span>
                                   {Math.abs(this.calculatePercent(val.PreviousWeekTotal, val.CurrentWeekTotal))}%)
                                </p> 
                                :
                                <p className="increase">
                                   +{(val.CurrentWeekTotal-val.PreviousWeekTotal)} &nbsp;
                                   (<span className="material-icons">north</span>
                                   {this.calculatePercent(val.PreviousWeekTotal, val.CurrentWeekTotal)}%)
                                </p>}
                                
                            </div>
                            <span className="material-icons-outlined">{val.icon}</span>
                        </div>
                    );
                })}

            </div>	
        );
    }
}
 
export default GeneralsOverview;