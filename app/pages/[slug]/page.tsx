// app/pages/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPage, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export default async function PageDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  const featuredImage = page.metadata?.featured_image
  const category = page.metadata?.category
  const content = getMetafieldValue(page.metadata?.content)
  const displayTitle = getMetafieldValue(page.metadata?.title) || page.title

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/pages" className="hover:text-brand-600">
          Pages
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{displayTitle}</span>
      </nav>

      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="mb-4 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 transition-colors hover:bg-brand-200"
        >
          {getMetafieldValue(category.metadata?.name) || category.title}
        </Link>
      )}

      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900">
        {displayTitle}
      </h1>

      {featuredImage && (
        <div className="mb-8 overflow-hidden rounded-xl">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={displayTitle}
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>
      )}

      {content ? (
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-gray-500">No content available for this page.</p>
      )}
    </article>
  )
}