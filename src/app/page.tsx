"use client"

import DashboardHeader from "@/components/dashboard-header"
import PatientsSidebar from "@/components/patients-sidebar"
import DiagnosisHistory from "@/components/diagnosis-history"
import DiagnosticList from "@/components/diagnostic-list"
import PatientProfile from "@/components/patient-profile"
import LabResults from "@/components/lab-results"
import { useState } from "react"

export default function Home() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="flex gap-6 p-6">
        {/* Left Sidebar - Patients List */}
        <PatientsSidebar onSelectPatient={setSelectedPatient} />

        {/* Center Content */}
        <div className="flex-1 space-y-6">
          <DiagnosisHistory patient={selectedPatient} />
          <DiagnosticList patient={selectedPatient} />
        </div>

        {/* Right Sidebar - Patient Profile */}
        <div className="w-80 space-y-6">
          <PatientProfile patient={selectedPatient} />
          <LabResults patient={selectedPatient} />
        </div>
      </div>
    </div>
  )
}
