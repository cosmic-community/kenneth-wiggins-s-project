import Link from 'next/link'
import { Page } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PageCardProps {
  page: Page
}

export default function PageCard({ page }: PageCardProps) {
  const featuredImage = page.metadata?.featured_image
  const category = page.metadata?.category
  const displayTitle = getMetafieldValue(page.metadata?.title) || page.title

  return (
    <Link
      href={`/pages/${page.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {featuredImage && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={displayTitle}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <span className="mb-2 inline-block w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand-600">
          {displayTitle}
        </h3>
      </div>
    </Link>
  )
}