import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="mb-4 text-6xl">🔍</span>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Page Not Found</h1>
      <p className="mb-6 max-w-md text-gray-500">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  )
}