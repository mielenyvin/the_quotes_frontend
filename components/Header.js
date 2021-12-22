import Link from 'next/link'
import Image from 'next/image'
import Search from './Search'

export default function Header() {
    return (

        <header className='bg-qblue text-white shadow w-full'>
               <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
               <Link href='/'>
                   <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mt-3 mb-1 
                   lg:mt-0 xl:mt-0 2xl:mt-0 md:mt-0 mb-0 md:mb-0'>
                       <img className='ml-3' src='/images/logo.png' width={40} height={40} alt='logo'/>
                   <span className='ml-3 text-xl '>the&nbsp;Quotes</span>
                   </a>
               </Link> 

            <nav className='flex flex-wrap w-5/5 md:w-4/5 items-center justify-end text-base md:ml-auto'>

            <Search />

                    <Link href='/about'>
                        <div className='hidden sm:block'><a className='mx-3 hover:text-qorange cursor-pointer uppercase'>About</a></div>
                    </Link>

            </nav>

            <Link href='/about'>
                        <div className='sm:hidden mb-3'><a className='mx-3  hover:text-qorange cursor-pointer uppercase'>About</a></div>
                    </Link>

            </div>
        </header>
    )
}
