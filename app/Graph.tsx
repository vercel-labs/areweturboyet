'use client';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    let data = payload[0].payload;
    let gitHash = data.gitHash.slice(0, 7);
    let progress = `${data.passing} / ${data.total}`;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${data.date.toLocaleString('default', {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}\n→ ${gitHash}`}</p>
        <p className="intro">{`${data.percent}%  (${progress})`}</p>
      </div>
    );
  }

  return null;
};

export default function Graph({ graphData }) {
  return (
    <section
      aria-hidden
      aria-label="Chart showing the progress of tests passing for Turbopack over time"
      className="Graph"
    >
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={graphData}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke={'#458ef7'} strokeDasharray="4" />
          <YAxis stroke={'#458ef7'} />
          <XAxis stroke={'#458ef7'} tick={false} />
          <Tooltip content={CustomTooltip} />
          <Line
            dataKey="percent"
            dot={false}
            type="stepAfter"
            stroke={'#ec2e66'}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
