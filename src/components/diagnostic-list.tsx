export default function DiagnosticList({ patient }: { patient: any }) {
  if (!patient) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-sm text-center text-gray-500">
        Select a patient to view diagnostics.
      </div>
    )
  }

  const diagnostics = patient.diagnostic_list || []

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">Diagnostic List</h2>

      {diagnostics.length === 0 ? (
        <p className="text-sm text-gray-500">No diagnostic data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-4 text-left text-sm font-semibold text-gray-700">Problem/Diagnosis</th>
                <th className="pb-4 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="pb-4 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {diagnostics.map((item: any, index: number) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 text-sm text-gray-900">{item.name}</td>
                  <td className="py-4 text-sm text-gray-600">{item.description}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                      <span className="text-sm text-gray-700">{item.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
