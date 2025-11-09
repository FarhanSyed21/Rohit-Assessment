import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LabResults({ patient }: { patient: any }) {
  if (!patient) {
    return (
      <div className="rounded-lg bg-white p-6 shadow-sm text-center text-gray-500">
        Select a patient to view lab results.
      </div>
    )
  }

  const labs = patient.lab_results || []

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Lab Results</h3>

      {labs.length === 0 ? (
        <p className="text-sm text-gray-500">No lab results available.</p>
      ) : (
        <div className="space-y-3">
          {labs.map((lab: string, index: number) => (
            <div key={index} className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <span className="text-sm text-gray-700">{lab}</span>
              <Button variant="ghost" size="sm">
                <Download className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
