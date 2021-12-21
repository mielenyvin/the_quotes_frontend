import qs from 'qs'
import CategoryList from '@/components/CategoryList'
import Layout from '@/components/Layout'
import NewsItem from '@/components/NewsItem'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CategoryPage({ news, page, total, categories }) {
    const router = useRouter()
  
    return (
      <Layout title='Search Results'>

        <h1>Only following categories: {router.query.term}</h1>
        {news.length === 0 && <h3>No news to show</h3>}
  
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {news.map((nw) => (
          <NewsItem key={nw.id} nw={nw} />
        ))}
         </div>
         
<Pagination page={page} total={total} />
<Link href='/'>Go Back</Link>

<div className='w-1/2'>
          <CategoryList categories={categories} />
        </div>

      </Layout>
    )
  }



export async function getServerSideProps({ query: { term } }) {
    const query = qs.stringify({
      _where: {
        _or: [
          { category_contains: term }
        ],
      },
    })

    const res = await fetch(`${API_URL}/news?${query}`)
    const news = await res.json()
  
    return {
      props: { news },
    }
  }