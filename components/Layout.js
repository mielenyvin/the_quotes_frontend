import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import CategoryList from '@/components/CategoryList'

export default function Layout({title, keywords, desciprtion, children, categories}) {
    const router = useRouter()

    return (
        <div className="flex flex-col h-screen justify-between  bg-qverylitegray">
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
                
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

                <meta name='description' content={desciprtion} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />

            {router.pathname === '/' && <Showcase />}

{/* <div className='hidden sm:block'>sm</div>
<div className='hidden md:block'>md</div>
<div className='hidden lg:block'>lg</div>
<div className='hidden xl:block'>xl</div>
<div className='hidden 2xl:block'>2xl</div>  */}
    
<main className='mb-auto container mx-auto px-5'>
<div className='my-5'>
<CategoryList categories={categories} />
</div>
<div className=''>
{children}
</div>
</main>

<div className='py-5'>
<Footer />
</div>
</div>
    )
}

Layout.defaultProps = {
    title: 'the Quotes News | Find the truth',
    description: 'Find the latest news',
    keywords: 'news, politics, technology'
}