import { useState, useEffect } from "react";
import "./css-styles/styles.css";
import BoxType from "../boxType.component/BoxType";
import BoxTable from "../boxTable.component/BoxTable";
import BoxChart from "../boxChart.component/BoxChart";
import { getAmountByCondition, getTotalByCondition } from "../../helpers";
import { Clients } from "../../dummyData";
function ClientStats(props) {
  const [clients, setClients] = useState([]);

  useEffect(function () {
    setClients(Clients);
  }, []);

  function infoBoxType() {
    return [
      {
        title: "Usuarios Normales",
        total: getTotalByCondition(clients, "type", "=", "normal"),
        subtypes: [
          {
            title: "Mujeres",
            amount: getAmountByCondition(
              clients,
              "type",
              "=",
              "normal",
              "gender",
              "female"
            ),
          },
          {
            title: "Hombres",
            amount: getAmountByCondition(
              clients,
              "type",
              "=",
              "normal",
              "gender",
              "male"
            ),
          },
        ],
      },
      {
        title: "Usuarios Express",
        total: getTotalByCondition(clients, "type", "=", "express"),
        subtypes: [
          {
            title: "Mujeres",
            amount: getAmountByCondition(
              clients,
              "type",
              "=",
              "express",
              "gender",
              "female"
            ),
          },
          {
            title: "Hombres",
            amount: getAmountByCondition(
              clients,
              "type",
              "=",
              "express",
              "gender",
              "female"
            ),
          },
        ],
      },
    ];
  }

  function getConnectedClients() {
    let connectedClients = [];
    clients.forEach((current) => {
      if (current.status === "connected") {
        connectedClients.push(current);
      }
    });
    return connectedClients;
  }

  return (
    <div id="client-stats">
      <div className="box-container">
        <div className="box box-header">
          <h2>Estadisticas de Usuarios</h2>
        </div>
      </div>

      <BoxType column="2" types={infoBoxType()} />

      <BoxChart>
        <div className="box-inside-control">
          <div className="box-buttons">
            <mark style={{ backgroundColor: "#0099cc" }}>Conectados</mark>
            <mark style={{ backgroundColor: "#ff9900" }}>Registrados</mark>
          </div>
          <div className="box-buttons">
            <select name="" id="">
              <option value="">Todos</option>
              <option value="">Mujeres</option>
              <option value="">Otros</option>
            </select>
          </div>
        </div>
      </BoxChart>

      <div className="box-container box-connected-chart">
        <div className="box box-chart-circle">
          <div className="box-inside-control">
            <div className="box-buttons">
              <label>Estados</label>
            </div>
            <div className="box-buttons">
              <select name="" id="">
                <option value="">Hoy</option>
                <option value="">Ayer</option>
                <option value="">Antes ayer</option>
              </select>
            </div>
          </div>

          <div className="chart-circle">
            <svg>
              {/* should be 20 < x <= 350 and 10 < y <= 295  
                            range labels  */}
              <g fill="#4d4d4d">
                <text x="0" y="10">
                  70
                </text>
                <text x="0" y="50">
                  60
                </text>
                <text x="0" y="90">
                  50
                </text>
                <text x="0" y="135">
                  40
                </text>
                <text x="0" y="175">
                  30
                </text>
                <text x="0" y="215">
                  20
                </text>
                <text x="0" y="255">
                  10
                </text>
                <text x="0" y="295">
                  0
                </text>
              </g>
              {/* horizontal lines  */}
              <g stroke="#dddddd" strokeWidth="1">
                <line x1="20" y1="10" x2="350" y2="10" />
                <line x1="20" y1="50" x2="350" y2="50" />
                <line x1="20" y1="90" x2="350" y2="90" />
                <line x1="20" y1="135" x2="350" y2="135" />
                <line x1="20" y1="175" x2="350" y2="175" />
                <line x1="20" y1="215" x2="350" y2="215" />
                <line x1="20" y1="255" x2="350" y2="255" />
                <line x1="20" y1="295" x2="350" y2="295" />
              </g>
              {/* vertical lines  */}
              <g stroke="#dddddd" strokeWidth="1">
                <line x1="87" y1="10" x2="87" y2="295" />
                <line x1="174" y1="10" x2="174" y2="295" />
                <line x1="261" y1="10" x2="261" y2="295" />
                <line x1="349" y1="10" x2="349" y2="295" />
              </g>
              {/* range bars those are the values to change  */}
              <g strokeWidth="30">
                <line
                  x1="50"
                  y1="295"
                  x2="50"
                  y2="205"
                  style={{ stroke: "#00cc99" }}
                />
                <line
                  x1="130"
                  y1="295"
                  x2="130"
                  y2="185"
                  style={{ stroke: "#0099cc" }}
                />
                <line
                  x1="220"
                  y1="295"
                  x2="220"
                  y2="240"
                  style={{ stroke: "#ff9900" }}
                />
                <line
                  x1="300"
                  y1="295"
                  x2="300"
                  y2="150"
                  style={{ stroke: "#e60000" }}
                />
              </g>
            </svg>
          </div>
        </div>

        <BoxTable
          kind="clients"
          labels={["Imagen / Codigo", "Nombre", "Email"]}
          values={getConnectedClients()}
        >
          <div className="box-inside-control">
            <div className="box-buttons">
              <label>Conectados</label>
            </div>
            <div className="box-buttons">
              <select name="" id="">
                <option value="">Hoy</option>
                <option value="">Ayer</option>
                <option value="">Antes ayer</option>
              </select>
            </div>
          </div>
        </BoxTable>
      </div>
    </div>
  );
}

export default ClientStats;
