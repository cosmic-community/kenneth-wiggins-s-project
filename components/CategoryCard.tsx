import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-xl">
        🏷️
      </div>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand-600">
        {name}
      </h3>
      {description && (
        <p className="line-clamp-2 text-sm text-gray-500">{description}</p>
      )}
    </Link>
  )
}