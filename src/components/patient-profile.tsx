import { Button } from "@/components/ui/button"

export default function PatientProfile({ patient }: { patient: any }) {
  if (!patient) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-sm text-center text-gray-500">
        Select a patient to view their profile.
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      <div className="mb-6 text-center">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">📅</div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Date Of Birth</p>
            <p className="text-sm font-semibold text-gray-900">{patient.date_of_birth}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">👤</div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Gender</p>
            <p className="text-sm font-semibold text-gray-900">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">📞</div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Contact Info</p>
            <p className="text-sm font-semibold text-gray-900">{patient.phone_number}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">🚨</div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Emergency Contact</p>
            <p className="text-sm font-semibold text-gray-900">{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">🛡️</div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Insurance Provider</p>
            <p className="text-sm font-semibold text-gray-900">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white font-medium">
        Show All Information
      </Button>
    </div>
  )
}
