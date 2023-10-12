"use client";

import React from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BLACK = "#262626";
const GRAY = "#ccc";

function getTooltipContent(data) {
  let gitHash = data.gitHash.slice(0, 7);
  let progress = `${data.passing} / ${data.total}`;
  return `${data.dateStr}\n→ ${gitHash}\n\n${data.percent}%  (${progress})`;
}

function getStyleMutationObj(color) {
  return [
    {
      mutation: (props) => {
        return {
          style: Object.assign({}, props.style, { fill: color }),
        };
      },
    },
  ];
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    let data = payload[0].payload;
    let gitHash = data.gitHash.slice(0, 7);
    let progress = `${data.passing} / ${data.total}`;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${data.dateStr}\n→ ${gitHash}`}</p>
        <p className="intro">{`${data.percent}%  (${progress})`}</p>
      </div>
    );
  }

  return null;
};

export default function Graph({ graphData }) {
  return (
    <div className="Graph">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={graphData}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke={"#458ef7"} strokeDasharray="4" />
          <YAxis stroke={"#458ef7"} />
          <XAxis stroke={"#458ef7"} tick={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            dataKey="percent"
            dot={false}
            type="stepAfter"
            stroke={"#ec2e66"}
            strokeWidth={3}
            onClick={(event, point) => {
              // let hash = point.datum.gitHash;
              // let url = `https://github.com/vercel/next.js/commit/${hash}`;
              // window.open(url);
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  // return (
  //   <div className="Graph" onMouseOut={this.props.onMouseOut}>
  //     <VictoryChart
  //       height={260}
  //       width={width}
  //       containerComponent={<VictoryContainer responsive={false} title="" />}
  //     >
  //       <VictoryAxis
  //         scale="time"
  //         standalone={false}
  //         style={styles.xAxis}
  //         tickValues={graphData.map((data) => data.date)}
  //         tickFormat={(date, index) => {
  //           return index === 0 || index === graphData.length - 1
  //             ? `${date.getMonth() + 1}/${date.getDate()}`
  //             : "";
  //         }}
  //       />
  //       <VictoryAxis
  //         dependentAxis
  //         domain={[0, 100]}
  //         style={styles.yAxis}
  //         tickFormat={(x) => `${x}%`}
  //         tickValues={[0, 25, 50, 75, 100]}
  //       />
  //       <VictoryLine
  //         data={graphData}
  //         domain={{ x: [start, end], y: [0, 100] }}
  //         interpolation="stepAfter"
  //         scale={{ x: "time", y: "linear" }}
  //         style={styles.line}
  //       />
  //       <VictoryScatter
  //         data={graphData}
  //         domain={{ x: [start, end], y: [0, 100] }}
  //         scale={{ x: "time", y: "linear" }}
  //         style={styles.scatter}
  //         events={[
  //           {
  //             eventHandlers: {
  //              onMouseOver: (event, point) => {
  //   this.props.onMouseOver(
  //     event,
  //     getTooltipContent(point.datum)
  //   );
  //   return getStyleMutationObj(BLACK);
  // },
  // onMouseOut: (event, point) => {
  //   let color =
  //     point.index === lastIndex ? BLACK : "transparent";
  //   return getStyleMutationObj(color);
  // },
  // onClick: (event, point) => {
  //   let hash = point.datum.gitHash;
  //   let url = `https://github.com/vercel/next.js/commit/${hash}`;
  //   window.open(url);
  // },
  //             },
  //           },
  //         ]}
  //       />
  //     </VictoryChart>
  //   </div>
  // );
}
