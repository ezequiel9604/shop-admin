
import {Component} from 'react';

import './css-styles/styles.css';

class TimeOverview  extends Component {
   
    constructor(props) {

        super(props);

        this.state = { 
            CurrentTime: new Date(),
            City: 'Santo Domingo',
            CurrentTemperture: 29
        };


        this.getDayOfWeek = this.getDayOfWeek.bind(this);
        this.getMonthOfYear = this.getMonthOfYear.bind(this);
    }

    componentDidMount(){

        this.TimerID = setInterval(() => {
            this.setState({ CurrentTime: new Date() });
        }, 1000);

    }

    componentWillUnmount(){
        clearInterval(this.TimerID);
    }

    getDayOfWeek(){
        const days = [
            "Domingo", "Lunes", "Martes", "Miercoles",
            "Jueves", "Sabado"
        ];

        let today = days[this.state.CurrentTime.getDay()];

        return today;
    }

    getMonthOfYear(){
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"
        ];

        let thisMonth = months[this.state.CurrentTime.getMonth()];

        return thisMonth;
    }


    render() { 

        const {CurrentTime} = this.state;

        return (
    
            <div className="box-container box-quick-view">

                <div className="box-date">
                    <div className="date">
                        <time>{this.getDayOfWeek()+', '+CurrentTime.toLocaleTimeString()}</time>
                        <strong>{CurrentTime.getDate()}</strong>
                        <p>{this.getMonthOfYear()+', '+ CurrentTime.getFullYear()}</p>
                    </div>
                </div>
    
                <div className="box-weather">
                    
                    <div className="today-weather">	
                        <address>
                            <span className="material-icons-outlined">room</span>
                            <label>{this.state.City}</label>
                        </address>
                        <strong>
                            <span className="material-icons-outlined">wb_sunny</span>
                            <label>{this.state.CurrentTemperture} ºC</label>
                        </strong>
                    </div>
    
                    <div className="week-weather">
                        
                        <article>
                            <label>Domingo</label>
                            <strong>31 ºC</strong>
                        </article>
                        <article>
                            <label>Lunes</label>
                            <strong>30 ºC</strong>
                        </article>
                        <article>
                            <label>Martes</label>
                            <strong>29 ºC</strong>
                        </article>
                        <article>
                            <label>Miercoles</label>
                            <strong>28 ºC</strong>
                        </article>
                        <article>
                            <label>Jueves</label>
                            <strong>27 ºC</strong>
                        </article>
                        <article>
                            <label>Viernes</label>
                            <strong>26 ºC</strong>
                        </article>
                        <article>
                            <label>Sabado</label>
                            <strong>25 ºC</strong>
                        </article>
    
                    </div>
    
                </div>	

            </div>		
        );
    }
}
 
export default TimeOverview;

