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


export function makeBar(idol) {
  // idol_list에 idol 을 찾아
  // count 값을 증가시켜
}

/*
만약 안되면 또다른 방법 :
- idol이름만 냅다 배열 내에 추가한다 (구현 쉬워짐)
- 배열 속에 있는 idol 이름을 중복되지 않게 다른 자료구조에 옮긴다
- 배열 속에 있는 각 idol 이름을 count해서 따로 저장한다 
- 해당 이름과 count를 아래 data에 써먹는다
*/


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
