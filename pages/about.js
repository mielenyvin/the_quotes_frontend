import Layout from '@/components/Layout'

export default function AboutPage() {
    return (
        <Layout title='About the Quotes'>
            <h1 className='text-5xl pb-5 font-bold'>About the Quotes</h1>

            <div className='bg-white shadow-md p-5 rounded-lg py-6 '>
                <h3 className='text-2xl mb-5'>
                    the Quotes media (Version 1.0.0)
                </h3>
                <p>
                This is an app to find the latest news and make a comprehensive vision of them.</p>
                <h1 className='text-2xl'>Project team:</h1>
               <p className='font-bold'>Dmitrii Kotikov (Russia)</p>
                <img className='ml-3' className='rounded-2xl' src='/images/dmitrii.jpg' width={100} height={100} alt='logo'/>
                <p  className='font-bold'>Houda Jaouhari (Morocco)</p>
                <img className='ml-3' className='rounded-2xl' src='/images/dmitrii.jpg' width={100} height={100} alt='logo'/>
                <p  className='font-bold'>Prabhmeet Singh Bhatti (India)</p>
                <img className='ml-3' className='rounded-2xl' src='/images/dmitrii.jpg' width={100} height={100} alt='logo'/>
               
               

            </div>

          
        </Layout>
    )
}
