import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Politics: 'blue-900',
    Business: 'gray-800',
    Technology: 'gray-900',
    Culture: 'blue-800',
    Sport: 'blue-700',
    Health: 'gray-700'
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]} text-white font-semibold rounded`}
    >
      <Link href={`/news/category?term=${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}