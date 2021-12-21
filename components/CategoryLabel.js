import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Politics: 'qblue-900',
    Business: 'qblue-800',
    Technology: 'qblue-700',
    Culture: 'qblue-600',
    Sport: 'qblue-500',
    Health: 'qblue-400'
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]} text-white font-semibold rounded`}
    >
      <Link href={`/news/category?term=${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}