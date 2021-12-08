import { useState } from "react";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import "./css-style/styles.css";

function ViewsOverview(props) {
  const [views] = useState([
    {
      name: "12am - 3am",
      visitas: 14,
    },
    {
      name: "4am - 7am",
      visitas: 45,
    },
    {
      name: "8am - 11pm",
      visitas: 27,
    },
    {
      name: "12pm - 2pm",
      visitas: 16,
    },
    {
      name: "3pm - 7pm",
      visitas: 39,
    },
    {
      name: "8pm - 12pm",
      visitas: 83,
    },
  ]);

  return (
    <div className="box-container">
      <div className="box box-chart-lines">
        <div className="box-inside-control">
          <div className="box-buttons">
            <label>Visitas del dia</label>
          </div>
        </div>

        <div className="chart-lines">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={views}
              margin={{ right: 10, left: -30, top: 10, bottom: 10 }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Tooltip />
              <Line dataKey="visitas" stroke="#0099cc" strokeWidth="3" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ViewsOverview;
