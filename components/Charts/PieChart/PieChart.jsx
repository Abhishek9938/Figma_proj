import React from "react";
import './PieChart.css'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDarkMode } from '../../../contexts/DarkModeContext';

const Lightdata = [
  { name: "Direct", value: 300.56, color: "#000000" },     // black
  { name: "Affiliate", value: 135.18, color: "#A2E7B5" }, // light green
  { name: "Sponsored", value: 154.02, color: "#8FA2FF" }, // blue-violet
  { name: "E-mail", value: 48.96, color: "#9BD8F9" },     // light blue
];
const Darkdata = [
  { name: "Direct", value: 300.56, color: "#C6C7F8" },     // indigo - visible in both themes
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" }, // emerald green - vibrant
  { name: "Sponsored", value: 154.02, color: "#95A4FC" }, // violet - good contrast
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },     // cyan - bright and visible
];

function SalesDonutChart() {
  const { isDarkMode } = useDarkMode();
  const data = isDarkMode ? Darkdata : Lightdata;
  // const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className={`SalesDonutChart ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className="sales-piechart" >
      <h3>Total Sales</h3>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) =>
              [`$${value.toFixed(2)}`, name]
            }
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="legend">
        {data.map((entry, index) => (
          <div
            key={index}
            className="legend-item"
          >
            <span className="legend-label">
              <span
                className="legend-color-indicator"
                style={{ backgroundColor: entry.color }}
              ></span>
              {entry.name}
            </span>
            <span>${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SalesDonutChart;