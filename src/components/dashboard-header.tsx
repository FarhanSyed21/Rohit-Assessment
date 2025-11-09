import { Search, Settings, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardHeader() {
  return (
    <header className="border-b border-gray-200 bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500">
            <span className="text-lg font-bold text-white">◀</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Tech Care</h1>
        </div>

        <nav className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Search className="h-5 w-5" />
            <span className="text-sm">Overview</span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-white">
            <span className="h-4 w-4 rounded-full bg-white text-teal-500">👤</span>
            <span className="text-sm font-medium">Patients</span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="text-sm">📅 Schedule</span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="text-sm">💬 Message</span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="text-sm">🏦 Transactions</span>
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/doctor-avatar.png" alt="Dr. Jose Simmons" className="h-10 w-10 rounded-full" />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Dr. Jose Simmons</p>
              <p className="text-gray-500">General Practitioner</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  )
}
