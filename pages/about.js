import Layout from '@/components/Layout'

export default function AboutPage() {
    return (
        <Layout title='About the Quotes'>
            <h1 className='text-5xl border-b-4 pb-5 font-bold'>About us</h1>

            <div className='bg-white  rounded-lg py-6 '>
            <h3 className='text-2xl mb-5'>
                    the Quotes media (Version 1.0.0)
                </h3>
                <p className='mb-3'>
                This is an app to find the latest news and make a comprehensive vision of them.</p>
                <h1 className='text-2xl'>Project team:</h1>
                <p><span className='font-bold'>Dmitry Kotikov</span> (Russia)</p>

            </div>

          
        </Layout>
    )
}
