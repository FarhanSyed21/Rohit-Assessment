"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function DiagnosisHistory({ patient }: { patient: any }) {
  if (!patient) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-sm text-center text-gray-500">
        Select a patient to view diagnosis history.
      </div>
    )
  }

  const history = patient.diagnosis_history || []

  // Format data for Recharts
  const chartData = history
    .slice() // clone
    .reverse() // ensure chronological order
    .map((h: any) => ({
      month: `${h.month} ${h.year}`,
      systolic: h.blood_pressure.systolic.value,
      diastolic: h.blood_pressure.diastolic.value,
    }))

  // Latest record (most recent month)
  const latest = history[0]

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Diagnosis History</h2>
      </div>

      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Blood Pressure</h3>
          <div className="flex items-center gap-8">
            <button className="text-sm text-gray-600 hover:text-gray-900">Last 6 months ▼</button>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-pink-500"></div>
                <span className="text-sm text-gray-600">Systolic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Diastolic</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-lg bg-purple-50 p-6">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: "12px" }} />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} domain={[60, 180]} />
              <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#ec4899"
                strokeWidth={2}
                dot={{ fill: "#ec4899", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Vitals Cards */}
        {latest && (
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-blue-50 p-6 border-2 border-gray-200">
              <div className="mb-4 text-4xl">🫁</div>
              <p className="mb-1 text-sm text-gray-600">Respiratory Rate</p>
              <p className="mb-1 text-2xl font-semibold text-gray-900">{latest.respiratory_rate.value} bpm</p>
              <p className="text-xs text-gray-500">{latest.respiratory_rate.levels}</p>
            </div>

            <div className="rounded-lg bg-pink-50 p-6 border-2 border-teal-500">
              <div className="mb-4 text-4xl">🌡️</div>
              <p className="mb-1 text-sm text-gray-600">Temperature</p>
              <p className="mb-1 text-2xl font-semibold text-gray-900">{latest.temperature.value}°F</p>
              <p className="text-xs text-gray-500">{latest.temperature.levels}</p>
            </div>

            <div className="rounded-lg bg-pink-50 p-6 border-2 border-gray-200">
              <div className="mb-4 text-4xl">❤️</div>
              <p className="mb-1 text-sm text-gray-600">Heart Rate</p>
              <p className="mb-1 text-2xl font-semibold text-gray-900">{latest.heart_rate.value} bpm</p>
              <p className="text-xs text-gray-500">{latest.heart_rate.levels}</p>
            </div>
          </div>
        )}
      </div>

      {/* Blood Pressure Reading */}
      {latest && (
        <div className="rounded-lg bg-purple-50 p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-2 text-sm text-gray-600">Systolic</p>
              <p className="text-4xl font-bold text-gray-900">{latest.blood_pressure.systolic.value}</p>
              <p className="mt-1 text-sm text-pink-600">▲ {latest.blood_pressure.systolic.levels}</p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-600">Diastolic</p>
              <p className="text-4xl font-bold text-gray-900">{latest.blood_pressure.diastolic.value}</p>
              <p className="mt-1 text-sm text-blue-600">▼ {latest.blood_pressure.diastolic.levels}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
