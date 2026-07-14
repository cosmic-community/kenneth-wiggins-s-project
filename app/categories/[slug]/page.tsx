// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategory, getPagesByCategory, getMetafieldValue } from '@/lib/cosmic'
import PageCard from '@/components/PageCard'
import EmptyState from '@/components/EmptyState'

export const revalidate = 60

export default async function CategoryDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const pages = await getPagesByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-brand-600">
          Categories
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{name}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        {description && <p className="mt-2 text-gray-500">{description}</p>}
      </div>

      {pages.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <PageCard key={page.id} page={page} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No pages in this category"
          message="There are no pages assigned to this category yet."
        />
      )}
    </div>
  )
}