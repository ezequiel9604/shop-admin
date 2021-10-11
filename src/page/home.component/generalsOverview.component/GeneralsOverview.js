import { Link } from "react-router-dom";
import "./css-styles/styles.css";

function GeneralsOverview(props) {
  function calculatePercent(previous, current) {
    let total = (current - previous) / current;
    let porcent = (total * 100).toFixed(1);
    return porcent;
  }

  function formatedNumber(num) {
    if (num >= 1000) {
      let newNum = num + "";
      let formated = "";

      for (let x = 0; x < newNum.length; x++) {
        if (x === 1) {
          formated += ",";
        }
        formated += newNum.charAt(x);
      }
      return formated;
    }
    return num;
  }

  return (
    <div className="box-container box-overview">
      {props.entities.map((current) => {
        return (
          <div className="box box-entities" key={current.id}>
            <div>
              <Link to="/">{current.name}</Link>
              <strong>{formatedNumber(current.currentWeekTotal)}</strong>
              {calculatePercent(
                current.previousWeekTotal,
                current.currentWeekTotal
              ) < 0 ? (
                <p className="decrease">
                  {current.currentWeekTotal - current.previousWeekTotal} &nbsp;
                  (<span className="material-icons">south</span>
                  {Math.abs(
                    calculatePercent(
                      current.previousWeekTotal,
                      current.currentWeekTotal
                    )
                  )}
                  %)
                </p>
              ) : (
                <p className="increase">
                  +{current.currentWeekTotal - current.previousWeekTotal} &nbsp;
                  (<span className="material-icons">north</span>
                  {calculatePercent(
                    current.previousWeekTotal,
                    current.currentWeekTotal
                  )}
                  %)
                </p>
              )}
            </div>
            <span className="material-icons-outlined">{current.icon}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GeneralsOverview;
