import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    
    <div id="main" className="lg:grid-cols-6 md:grid-cols-3 grid grid-cols-3 gap-1 justify-evenly text-center divide-metal lg:divide-x"> 
     <Link href="/news/category?term=politics"><div className="py-1 cursor-pointer hover:text-gray-800">Politics</div></Link>
     <Link href="/news/category?term=business"><div className="py-1 cursor-pointer hover:text-gray-800">Business</div></Link>
     <Link href="/news/category?term=technology"><div className="py-1 cursor-pointer hover:text-gray-800">Technology</div></Link>
     <Link href="/news/category?term=health"><div className="py-1 cursor-pointer hover:text-gray-800">Health</div></Link>
     <Link href="/news/category?term=sport"><div className="py-1 cursor-pointer hover:text-gray-800">Sport</div></Link>
     <Link href="/news/category?term=culture"><div className="py-1 cursor-pointer hover:text-gray-800">Culture</div></Link>
    </div> 
  )
}