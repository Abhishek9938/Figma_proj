import React from "react";
import './PieChart.css'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },     // black
  { name: "Affiliate", value: 135.18, color: "#A2E7B5" }, // light green
  { name: "Sponsored", value: 154.02, color: "#8FA2FF" }, // blue-violet
  { name: "E-mail", value: 48.96, color: "#9BD8F9" },     // light blue
];

function SalesDonutChart() {
  // const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="sales-piechart" >
      <h3 style={{ marginBottom: "16px" }}>Total Sales</h3>

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
      <div style={{ marginTop: "12px" }}>
        {data.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  backgroundColor: entry.color,
                  borderRadius: "50%",
                  marginRight: 8,
                }}
              ></span>
              {entry.name}
            </span>
            <span>${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesDonutChart;