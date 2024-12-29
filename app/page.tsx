import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Copy, RefreshCcw } from 'lucide-react'
import { Overview } from "@/components/overview"

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="bg-gray-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Copy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,160</div>
            <p className="text-xs text-green-500">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,430</div>
            <p className="text-xs text-green-500">12% more than last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,450</div>
            <p className="text-xs text-red-500">8% less than last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <RefreshCcw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,180</div>
            <p className="text-xs text-muted-foreground">Goal: $5,000</p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-gray-950/50">
        <CardHeader>
          <CardTitle>Net Worth</CardTitle>
          <div className="text-2xl font-bold">$189,253.00</div>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
    </div>
  )
}

