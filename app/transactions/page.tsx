"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { cn } from "@/lib/utils"

const cashflowData = [
  { month: "01", income: 5000, expenses: 3000 },
  { month: "02", income: 5200, expenses: 3100 },
]

const transactions = [
  {
    id: 1,
    date: "2023-01-01",
    category: "Food",
    amount: -1200.00,
  },
  {
    id: 2,
    date: "2023-01-01",
    category: "Rent",
    amount: -1500.00,
  },
  {
    id: 3,
    date: "2023-01-01",
    category: "Salary",
    amount: 5000.00,
  },
  {
    id: 4,
    date: "2023-01-15",
    category: "Utilities",
    amount: -300.00,
  },
]

export default function TransactionsPage() {
  return (
    <div className="space-y-4">
      <Card className="bg-gray-950/50">
        <CardHeader>
          <CardTitle>Cashflow</CardTitle>
          <div className="text-2xl font-bold">$2,100.00</div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cashflowData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#4ade80" name="Income" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-gray-950/50">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell className={cn(
                      "text-right",
                      transaction.amount > 0 ? "text-green-500" : "text-red-500"
                    )}>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

