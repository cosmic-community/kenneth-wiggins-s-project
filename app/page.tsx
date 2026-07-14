import Link from 'next/link'
import { getPages, getCategories } from '@/lib/cosmic'
import PageCard from '@/components/PageCard'
import CategoryCard from '@/components/CategoryCard'
import EmptyState from '@/components/EmptyState'

export const revalidate = 60

export default async function HomePage() {
  const [pages, categories] = await Promise.all([getPages(), getCategories()])

  const featuredPages = pages.slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Kenneth Wiggins&apos;s Project
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-100">
            Explore our collection of pages and categories, all managed with
            Cosmic CMS.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/pages"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-transform hover:scale-105"
            >
              Browse Pages
            </Link>
            <Link
              href="/categories"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <Link
            href="/categories"
            className="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            View all →
          </Link>
        </div>
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No categories yet"
            message="Categories will appear here once they're added to your Cosmic bucket."
          />
        )}
      </section>

      {/* Featured Pages */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Featured Pages</h2>
            <Link
              href="/pages"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              View all →
            </Link>
          </div>
          {featuredPages.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPages.map((page) => (
                <PageCard key={page.id} page={page} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No pages yet"
              message="Pages will appear here once they're added to your Cosmic bucket."
            />
          )}
        </div>
      </section>
    </div>
  )
}