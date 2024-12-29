"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "01",
    value: 150000,
  },
  {
    month: "02",
    value: 155000,
  },
  {
    month: "03",
    value: 160000,
  },
  {
    month: "04",
    value: 175000,
  },
  {
    month: "05",
    value: 180000,
  },
  {
    month: "06",
    value: 210000,
  },
  {
    month: "07",
    value: 189253,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4ade80"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

