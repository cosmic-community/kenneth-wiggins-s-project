import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'
import EmptyState from '@/components/EmptyState'

export const revalidate = 60

export default async function CategoriesIndex() {
  const categories = await getCategories()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        <p className="mt-2 text-gray-500">
          Explore content organized by category.
        </p>
      </div>
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No categories found"
          message="There are no categories available yet. Add some in your Cosmic bucket."
        />
      )}
    </div>
  )
}