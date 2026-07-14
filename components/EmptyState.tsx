interface EmptyStateProps {
  title: string
  message: string
}

export default function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center">
      <span className="mb-4 text-4xl">📭</span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="max-w-sm text-sm text-gray-500">{message}</p>
    </div>
  )
}