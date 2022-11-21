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


var idol_list = [
  {"name":"Blink", "count":5},
  {"name":"ARMY", "count":4},
  {"name":"MY", "count":2},
  {"name":"NCTzen", "count":3},
  {"name":"DIVE", "count":4}
];

const data = [
  {
    name: idol_list[0].name,
    uv: idol_list[0].count,
  },
  {
    name: idol_list[1].name,
    uv: idol_list[1].count,
  },
  {
    name: idol_list[2].name,
    uv: idol_list[2].count,
  },
  {
    name: idol_list[3].name,
    uv: idol_list[3].count,
  },
  {
    name: idol_list[4].name,
    uv: idol_list[4].count,
  }
];


// // 승희의 뻘짓 counting... 
// //const counting = {"ex1":1, "ex2":2};
// var counting = localStorage.getItem("count");
// if (counting === null) {
//   counting = {
//     "Blink":5,
//     "ARMY":4,
//     "MY":2
//   };
//   localStorage.setItem("count", counting)
// }
// // counting  local get 하기
// // key 모음
// for (var key in counting) {
//   console.log(key);
//   data.push( {
//     name: key,
//     uv: counting[key]
//   })
// }


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
          <Bar name="기부 수" dataKey="uv" fill="#8884d8">
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