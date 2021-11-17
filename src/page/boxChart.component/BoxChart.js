import "./css-styles/styles.css";

function BoxChart(props) {
  return (
    <div className="box-container">
      <div className="box box-chart-lines">

        {props.children}

        <div className="chart-lines">
          <svg>
            {/* should be 10 < x <=850 and 10 < y <=240  range numbers  */}
            <g fill="#4d4d4d">
              <text x="0" y="10">
                60
              </text>
              <text x="0" y="50">
                50
              </text>
              <text x="0" y="90">
                40
              </text>
              <text x="0" y="130">
                30
              </text>
              <text x="0" y="170">
                20
              </text>
              <text x="0" y="210">
                10
              </text>
              <text x="0" y="240">
                0
              </text>
            </g>
            {/* horizontal lines  */}
            <g stroke="#dddddd" strokeWidth="1">
              <line x1="20" y1="10" x2="850" y2="10" />
              <line x1="20" y1="50" x2="850" y2="50" />
              <line x1="20" y1="90" x2="850" y2="90" />
              <line x1="20" y1="130" x2="850" y2="130" />
              <line x1="20" y1="170" x2="850" y2="170" />
              <line x1="20" y1="210" x2="850" y2="210" />
              <line x1="20" y1="240" x2="850" y2="240" />
            </g>
            {/* vertical lines  */}
            <g stroke="#dddddd" strokeWidth="1">
              <line x1="121" y1="10" x2="121" y2="240" />
              <line x1="242" y1="10" x2="242" y2="240" />
              <line x1="363" y1="10" x2="363" y2="240" />
              <line x1="484" y1="10" x2="484" y2="240" />
              <line x1="605" y1="10" x2="605" y2="240" />
              <line x1="726" y1="10" x2="726" y2="240" />
              <line x1="847" y1="10" x2="847" y2="240" />
            </g>
            {/* range days  */}
            <g fill="#4d4d4d">
              <text x="40" y="255">
                Domingo
              </text>
              <text x="160" y="255">
                Lunes
              </text>
              <text x="280" y="255">
                Martes
              </text>
              <text x="400" y="255">
                Miercoles
              </text>
              <text x="520" y="255">
                Jueves
              </text>
              <text x="640" y="255">
                Viernes
              </text>
              <text x="760" y="255">
                Sabado
              </text>
            </g>
            <g fill="#0099cc">
              cy values for used articles cy values are going to change
              dinamically
              <circle
                cx="60"
                cy="191"
                r="6"
              />
              <circle
                cx="180"
                cy="144"
                r="6"
              />
              <circle
                cx="300"
                cy="101"
                r="6"
              />
              <circle
                cx="420"
                cy="203"
                r="6"
              />
              <circle
                cx="540"
                cy="220"
                r="6"
              />
              <circle
                cx="660"
                cy="200"
                r="6"
              />
              <circle
                cx="780"
                cy="230"
                r="6"
              />
            </g>
            {/* clue lines  */}
            <g stroke="#0099cc" strokeWidth="3">
              <line x1="60" y1="191" x2="180" y2="144" />
              <line x1="180" y1="144" x2="300" y2="101" />
              <line x1="300" y1="101" x2="420" y2="203" />
              <line x1="420" y1="203" x2="540" y2="220" />
              <line x1="540" y1="220" x2="660" y2="200" />
              <line x1="660" y1="200" x2="780" y2="230" />
            </g>
            <g fill="#ff9900">
              cy values for new articles cy values are going to change
              dinamically
              <circle
                cx="60"
                cy="133"
                r="6"
              />
              <circle
                cx="180"
                cy="99"
                r="6"
              />
              <circle
                cx="300"
                cy="215"
                r="6"
              />
              <circle
                cx="420"
                cy="145"
                r="6"
              />
              <circle
                cx="540"
                cy="110"
                r="6"
              />
              <circle
                cx="660"
                cy="88"
                r="6"
              />
              <circle
                cx="780"
                cy="95"
                r="6"
              />
            </g>
            {/* clue lines  */}
            <g stroke="#ff9900" strokeWidth="3">
              <line x1="60" y1="133" x2="180" y2="99" />
              <line x1="180" y1="99" x2="300" y2="215" />
              <line x1="300" y1="215" x2="420" y2="145" />
              <line x1="420" y1="145" x2="540" y2="110" />
              <line x1="540" y1="110" x2="660" y2="88" />
              <line x1="660" y1="88" x2="780" y2="95" />
            </g>
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BoxChart;
