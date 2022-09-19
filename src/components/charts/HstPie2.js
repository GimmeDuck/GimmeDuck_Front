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
    name: "기부통계",
    pv: 240,
    uv: 400,
    amt: 240,
  },
];

export default class HstPie2 extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <BarChart
        layout="vertical"
        width={500}
        height={100}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 50,
          bottom: 5,
        }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar name="나눔" dataKey="pv" stackId="a" fill="#FFBB28" />
        <Bar name="관리" dataKey="uv" stackId="a" fill="#696969" />
        <Bar name="기타" dataKey="amt" stackId="a" fill="#DCDCDC	" />
      </BarChart>
    );
  }
}
