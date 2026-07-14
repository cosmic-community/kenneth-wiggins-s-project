import { getPages } from '@/lib/cosmic'
import PageCard from '@/components/PageCard'
import EmptyState from '@/components/EmptyState'

export const revalidate = 60

export default async function PagesIndex() {
  const pages = await getPages()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Pages</h1>
        <p className="mt-2 text-gray-500">
          Browse all pages in Kenneth Wiggins&apos;s Project.
        </p>
      </div>
      {pages.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <PageCard key={page.id} page={page} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No pages found"
          message="There are no pages available yet. Add some in your Cosmic bucket."
        />
      )}
    </div>
  )
}