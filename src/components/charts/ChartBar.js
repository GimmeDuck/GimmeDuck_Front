import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Blink",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Dive",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MY",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "ARMY",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "SOWON",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "SWEET",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "UAENA",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = [
  "#FED154",
  "#FEBF0E",
  "#E1A601",
  "#C79301",
  "#A77C01",
  "#8D6801",
  "#705300",
];

export default class Barcht extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  render() {
    return (
      <ResponsiveContainer width="100%" height="45%">
        <BarChart width={10} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
          <Tooltip />
          <XAxis dataKey="name" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
