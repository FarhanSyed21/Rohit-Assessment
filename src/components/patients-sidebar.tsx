"use client"

import { useEffect, useState } from "react"
import { Search, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PatientsSidebar({ onSelectPatient }: { onSelectPatient: (patient: any) => void }) {
  const [patients, setPatients] = useState<any[]>([])
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log("Fetched API data:", data)

        if (Array.isArray(data)) {
          setPatients(data)
          setSelectedPatient(0)
          onSelectPatient(data[0])
        } else if (Array.isArray(data?.patients)) {
          // In case API wraps data
          setPatients(data.patients)
          setSelectedPatient(0)
          onSelectPatient(data.patients[0])
        } else {
          console.error("Unexpected API format:", data)
          setError("Unexpected data format from API")
        }
      } catch (err) {
        console.error("Error fetching patients:", err)
        setError("Failed to load patients")
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [onSelectPatient])

  if (loading) return <div className="p-6 text-gray-500">Loading patients...</div>
  if (error) return <div className="p-6 text-red-500">{error}</div>
  if (!Array.isArray(patients)) return <div className="p-6 text-red-500">Invalid data format</div>

  return (
    <div className="w-64 space-y-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Patients</h2>
        <Button variant="ghost" size="sm">
          <Search className="h-5 w-5 text-gray-400" />
        </Button>
      </div>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {patients.map((patient, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedPatient(index)
              onSelectPatient(patient)
            }}
            className={`flex items-center justify-between rounded-lg p-3 cursor-pointer transition-colors ${
              selectedPatient === index ? "bg-teal-50 border-l-4 border-teal-500" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3 flex-1">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{patient.name}</p>
                <p className="text-xs text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
