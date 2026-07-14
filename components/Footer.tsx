export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>
          &copy; {year} Kenneth Wiggins&apos;s Project. All rights reserved.
        </p>
      </div>
    </footer>
  )
}