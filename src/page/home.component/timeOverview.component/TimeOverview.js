import { useState, useEffect } from "react";
import "./css-styles/styles.css";

function TimeOverview() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    let timerID= setTimeout(() => {
      setTimer((timer) => (timer = new Date()));
    }, 1000);

    return () => clearTimeout(timerID);
  });

  function getDayOfWeek() {
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Sabado",
    ];

    let today = days[timer.getDay()];
    return today;
  }

  function getMonthOfYear() {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    let thisMonth = months[timer.getMonth()];
    return thisMonth;
  }

  return (
    <div className="box-container box-quick-view">
      <div className="box-date">
        <div className="date">
          <time>{getDayOfWeek() + ", " + timer.toLocaleTimeString()}</time>
          <strong>{timer.getDate()}</strong>
          <p>{getMonthOfYear() + ", " + timer.getFullYear()}</p>
        </div>
      </div>

      <div className="box-weather">
        <div className="today-weather">
          <address>
            <span className="material-icons-outlined">room</span>
            <label>Santo Domingo</label>
          </address>
          <strong>
            <span className="material-icons-outlined">wb_sunny</span>
            <label>29 ºC</label>
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

export default TimeOverview;
