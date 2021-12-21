import Link from 'next/link'
import { PER_PAGE } from '@/config/index'

export default function Pagination({page, total}) {

    const lastPage = Math.ceil(total / PER_PAGE)
    return (

        <>
        <div className='mt-6'>
        <ul className='flex pl-0 list-none my-2'>
        {page > 1 && (
                <>
        <Link href={`/news?page=${page - 1}`} passHref>
 <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Previous
            </li>
        </Link>
    

            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
            Page {page}
            {/* {page} of {total} */}
            </li>
            </>
        )}


{page < lastPage && (
        <Link href={`/news?page=${page + 1}`} passHref>
 <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Next
            </li>
        </Link>
      )}
      </ul>
      </div>
        </>
    )
}
