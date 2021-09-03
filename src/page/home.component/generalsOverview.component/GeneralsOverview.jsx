
import { Link } from "react-router-dom";

import './css-styles/styles.css';

import React from 'react';

function GeneralsOverview(props) {

    function calculatePercent(previous, current){

        let total = (current - previous) / current;

        let porcent = (total * 100).toFixed(1);

        return porcent;
    }

    function formatedNumber(num){

        if(num >= 1000){
            let newNum = num+'';
            let formated = '';

            for(let x = 0; x < newNum.length; x++){
                if(x === 1){
                    formated+= ',';
                }
                formated+= newNum.charAt(x);
            }

            return formated;
        }

        return num;
    }

    return (  
	
        <div className="box-container box-overview">
            
            {props.entities.map((val) => {
                return (
                    <div className="box box-entities" key={val.id}>
                        <div>
                            <Link to='/'>{val.name}</Link>
                            <strong>{formatedNumber(val.CurrentWeekTotal)}</strong>
                            {(calculatePercent(val.PreviousWeekTotal, val.CurrentWeekTotal) < 0)? 
                            <p className="decrease">
                               {(val.CurrentWeekTotal-val.PreviousWeekTotal)} &nbsp;
                               (<span className="material-icons">south</span>
                               {Math.abs(calculatePercent(val.PreviousWeekTotal, val.CurrentWeekTotal))}%)
                            </p> 
                            :
                            <p className="increase">
                               +{(val.CurrentWeekTotal-val.PreviousWeekTotal)} &nbsp;
                               (<span className="material-icons">north</span>
                               {calculatePercent(val.PreviousWeekTotal, val.CurrentWeekTotal)}%)
                            </p>}
                            
                        </div>
                        <span className="material-icons-outlined">{val.icon}</span>
                    </div>
                );
            })}

        </div>	
    );
}

export default GeneralsOverview;
