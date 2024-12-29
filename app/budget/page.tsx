"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const budgetItems = [
  {
    category: "Mortgage",
    spent: 1800,
    budget: 3750,
    percentage: 48,
  },
  {
    category: "Groceries",
    spent: 250,
    budget: 200,
    percentage: 125,
  },
  {
    category: "Entertainment",
    spent: 0,
    budget: 200,
    percentage: 0,
  },
  {
    category: "Shopping",
    spent: 0,
    budget: 100,
    percentage: 0,
  },
]

export default function BudgetPage() {
  return (
    <Card className="bg-gray-950/50">
      <CardContent className="p-6">
        <div className="space-y-6">
          {budgetItems.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.category}</span>
                <span className="text-gray-400">{item.percentage}%</span>
              </div>
              <div className="text-sm text-gray-400">
                ${item.spent.toFixed(2)} of ${item.budget.toFixed(2)}
              </div>
              <Progress
                value={item.percentage}
                className={`h-2 ${item.percentage > 100 ? "[&>div]:bg-red-500" : "[&>div]:bg-green-500"}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

