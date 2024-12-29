"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const spendingData = [
  { name: "Food", value: 1200, color: "#4ade80" },
  { name: "Rent", value: 1500, color: "#ef4444" },
  { name: "Utilities", value: 300, color: "#facc15" },
  { name: "Entertainment", value: 500, color: "#60a5fa" },
]

export default function AnalyticsPage() {
  const total = spendingData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-4">
      <Card className="bg-[#212b35] border border-[#2a3643]">
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid gap-2">
            {spendingData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <span>${item.value.toFixed(2)} ({((item.value / total) * 100).toFixed(1)}%)</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
