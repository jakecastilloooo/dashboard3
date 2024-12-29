"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const portfolioData = [
  { name: "Crypto", value: 210282.93, color: "#4ade80" },
  { name: "Equities", value: 51464.55, color: "#ef4444" },
]

const cryptoHoldings = [
  { name: "BTC", type: "Crypto", value: 97494.40, allocation: 37.2 },
  { name: "ETH", type: "Crypto", value: 46243.24, allocation: 17.7 },
  { name: "SOL", type: "Crypto", value: 44544.29, allocation: 17.0 },
]

export default function InvestmentsPage() {
  const total = portfolioData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-4">
      <Card className="bg-gray-950/50">
        <CardContent className="p-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid gap-2">
            {portfolioData.map((item) => (
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
      <Card className="bg-gray-950/50">
        <CardHeader>
          <CardTitle>Portfolio: ${total.toFixed(2)}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4 text-right">Value</th>
                  <th className="pb-4 text-right">Allocation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {cryptoHoldings.map((holding) => (
                  <tr key={holding.name}>
                    <td className="py-4">{holding.name}</td>
                    <td className="py-4">{holding.type}</td>
                    <td className="py-4 text-right">${holding.value.toFixed(2)}</td>
                    <td className="py-4 text-right">{holding.allocation}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

