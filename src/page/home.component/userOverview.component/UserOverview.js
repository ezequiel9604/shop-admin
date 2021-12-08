import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import "./css-styles/styles.css";

function UserOverview(props) {

  const data = [
    {name: 'Hombres', students: 2},
    {name: 'Mujeres', students: 3},
  ];
  const COLORS = ['#0099cc', '#FF8042',];
  
  return (
    <div className="box-container box-gender-age-address">
      <div className="box box-gender">
        <div className="box-inside-control">
          <div className="box-buttons">
            <label>Genero</label>
          </div>
        </div>

        <div className="chart-gender">
        <ResponsiveContainer height={200} width="100%">
          <PieChart >
            <Pie data={data} dataKey="students" outerRadius={100} 
              innerRadius={60} fill="gray" >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
          </PieChart>


        </ResponsiveContainer>
        

        </div>
      </div>

      <div className="box box-age">
        <div className="box-inside-control">
          <div className="box-buttons">
            <label>Edad</label>
          </div>
        </div>

        <div className="chart-age">
          <svg>
            {/* should be 20 < x <= 350 and 10 < y <= 295 
                            range labels  */}
            <g fill="#4d4d4d">
              <text x="0" y="10">
                120
              </text>
              <text x="0" y="40">
                100
              </text>
              <text x="0" y="70">
                80
              </text>
              <text x="0" y="100">
                60
              </text>
              <text x="0" y="130">
                40
              </text>
              <text x="0" y="160">
                20
              </text>
              <text x="0" y="190">
                0
              </text>
            </g>
            {/* horizontal lines  */}
            <g stroke="#dddddd" strokeWidth="1">
              <line x1="6%" y1="10" x2="99%" y2="10" />
              <line x1="6%" y1="40" x2="99%" y2="40" />
              <line x1="6%" y1="70" x2="99%" y2="70" />
              <line x1="6%" y1="100" x2="99%" y2="100" />
              <line x1="6%" y1="130" x2="99%" y2="130" />
              <line x1="6%" y1="160" x2="99%" y2="160" />
              <line x1="6%" y1="190" x2="99%" y2="190" />
            </g>
            {/* vertical lines */}
            <g stroke="#dddddd" strokeWidth="1">
              <line x1="27%" y1="10" x2="27%" y2="190" />
              <line x1="52%" y1="10" x2="52%" y2="190" />
              <line x1="77%" y1="10" x2="77%" y2="190" />
            </g>

            {/* range labels */}
            <g fill="#4d4d4d">
              <text x="10%" y="205">
                18-25
              </text>
              <text x="35%" y="205">
                26-35
              </text>
              <text x="60%" y="205">
                36-45
              </text>
              <text x="85%" y="205">
                46-55
              </text>
            </g>

            {/* range bars 
                            those are the values to change  */}
            <g stroke="#0099cc" strokeWidth="20">
              <line x1="15%" y1="190" x2="15%" y2="120" />
              <line x1="40%" y1="190" x2="40%" y2="110" />
              <line x1="65%" y1="190" x2="65%" y2="90" />
              <line x1="90%" y1="190" x2="90%" y2="105" />
            </g>
          </svg>

          <div id="tooltip-chart-age">
            <div></div>
          </div>
        </div>
      </div>

      <div className="box box-address">
        <div className="box-inside-control">
          <div className="box-buttons">
            <label>Locación</label>
          </div>
        </div>

        <div className="chart-address">
          <svg>
            {/* should be 20 < x <= 350 and 10 < y <= 295
                            range labels  */}
            <g fill="#4d4d4d">
              <text x="0" y="10">
                120
              </text>
              <text x="0" y="40">
                100
              </text>
              <text x="0" y="70">
                80
              </text>
              <text x="0" y="100">
                60
              </text>
              <text x="0" y="130">
                40
              </text>
              <text x="0" y="160">
                20
              </text>
              <text x="0" y="190">
                0
              </text>
            </g>
            {/* horizontal lines  */}
            <g stroke="#dddddd" strokeWidth="1">
              <line x1="6%" y1="10" x2="99%" y2="10" />
              <line x1="6%" y1="40" x2="99%" y2="40" />
              <line x1="6%" y1="70" x2="99%" y2="70" />
              <line x1="6%" y1="100" x2="99%" y2="100" />
              <line x1="6%" y1="130" x2="99%" y2="130" />
              <line x1="6%" y1="160" x2="99%" y2="160" />
              <line x1="6%" y1="190" x2="99%" y2="190" />
            </g>
            {/* vertical lines */}
            <g stroke="#dddddd" strokeWidth="1">
              <line x1="27%" y1="10" x2="27%" y2="190" />
              <line x1="52%" y1="10" x2="52%" y2="190" />
              <line x1="77%" y1="10" x2="77%" y2="190" />
            </g>

            {/* range labels */}
            <g fill="#4d4d4d">
              <text x="10%" y="205">
                SDE
              </text>
              <text x="35%" y="205">
                SDN
              </text>
              <text x="60%" y="205">
                ZO
              </text>
              <text x="85%" y="205">
                Otros
              </text>
            </g>

            {/* range bars
                            those are the values to change */}
            <g stroke="#0099cc" strokeWidth="20">
              <line x1="15%" y1="190" x2="15%" y2="120" />
              <line x1="40%" y1="190" x2="40%" y2="110" />
              <line x1="65%" y1="190" x2="65%" y2="90" />
              <line x1="90%" y1="190" x2="90%" y2="105" />
            </g>
          </svg>

          <div id="tooltip-chart-address">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOverview;
