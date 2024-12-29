"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const assetData = [
  { name: "Property", value: 93232.56, color: "#4ade80" },
  { name: "Crypto", value: 143737.64, color: "#ef4444" },
  { name: "Equities", value: 42871.63, color: "#facc15" },
]

const assetDetails = [
  { name: "Car", type: "Property", value: 12000.00 },
  { name: "2376 Archwood", type: "Property", value: 81232.56 },
  { name: "Savings", type: "Property", value: 0.00 },
  { name: "BTC", type: "Crypto", value: 97494.40 },
]

export default function AssetsPage() {
  const total = assetData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-4">
      <Card className="bg-[#212b35] border border-[#2a3643]">
        <CardContent className="p-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assetData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {assetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid gap-2">
            {assetData.map((item) => (
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
      <Card className="bg-[#212b35] border border-[#2a3643]">
        <CardHeader>
          <CardTitle>Asset Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#2a3643]">
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4 text-right">Value</th>
                  <th className="pb-4 text-right">% of Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a3643]">
                {assetDetails.map((asset) => (
                  <tr key={asset.name}>
                    <td className="py-4">{asset.name}</td>
                    <td className="py-4">{asset.type}</td>
                    <td className="py-4 text-right">${asset.value.toFixed(2)}</td>
                    <td className="py-4 text-right">{((asset.value / total) * 100).toFixed(1)}%</td>
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
