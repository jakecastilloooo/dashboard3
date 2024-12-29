"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, ChevronUp, Menu, PiggyBank, Search, BarChart3, Wallet, LineChart, CircleDollarSign } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  {
    title: "Overview",
    links: [
      { title: "Dashboard", href: "/", icon: PiggyBank },
      { title: "Transactions", href: "/transactions", icon: Wallet },
      { title: "Analytics", href: "/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Finances",
    links: [
      { title: "Budget", href: "/budget", icon: CircleDollarSign },
      { title: "Investments", href: "/investments", icon: LineChart },
      { title: "Assets", href: "/assets", icon: ChevronUp },
    ],
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#141c24]">
      {/* Sidebar for desktop */}
      <div className="hidden w-64 border-r border-[#2a3643] bg-[#212b35] md:block">
        <div className="flex h-16 items-center gap-2 border-b border-[#2a3643] px-4">
          <PiggyBank className="h-6 w-6" />
          <span className="font-semibold">Finance Dashboard</span>
        </div>
        <div className="flex flex-col gap-6 p-4">
          {navigation.map((group) => (
            <div key={group.title}>
              <div className="mb-2 text-sm font-medium text-gray-400">{group.title}</div>
              <div className="flex flex-col gap-1">
                {group.links.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#2a3643]",
                        pathname === link.href ? "bg-[#2a3643] text-white" : "text-gray-400"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {link.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-[#212b35] p-0">
          <div className="flex h-16 items-center gap-2 border-b border-[#2a3643] px-4">
            <PiggyBank className="h-6 w-6" />
            <span className="font-semibold">Finance Dashboard</span>
          </div>
          <div className="flex flex-col gap-6 p-4">
            {navigation.map((group) => (
              <div key={group.title}>
                <div className="mb-2 text-sm font-medium text-gray-400">{group.title}</div>
                <div className="flex flex-col gap-1">
                  {group.links.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#2a3643]",
                          pathname === link.href ? "bg-[#2a3643] text-white" : "text-gray-400"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {link.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1">
        <header className="flex h-16 items-center border-b border-[#2a3643]">
          <div className="flex w-full px-4 md:px-6">
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex flex-1 items-center gap-4">
              <div className="flex-1 md:ml-auto md:w-80">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    placeholder="Search..."
                    className="w-full bg-[#212b35] pl-8"
                  />
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image
                  alt="Profile"
                  className="rounded-full object-cover"
                  height="32"
                  width="32"
                  src="/profile.jpg"
                  priority
                />
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto px-4 py-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

