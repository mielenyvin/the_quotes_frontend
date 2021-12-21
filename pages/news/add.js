import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import Layout from '@/components/Layout'

export default function AddNewsPage() {

    const [values, setValues] = useState({
        title1: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: ''
    })

    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        // Validation
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if(hasEmptyFields) {
            toast.error('Please fill in all fields')
        }

        const res = await fetch(`${API_URL}/news`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        if(!res.ok) {
            toast.error('Something Went Wrong')
        } else {
            const nw = await res.json()
            router.push(`/news/${nw.slug}`)
        }
    }

    const handleInputChange =(e) => {
        const {title1, value} = e.target
        setValues({...values, [title1]: value})
    }

    return (
       <Layout title='Add news'>
           <Link href='/news'>Go Back</Link>
            <h1>Add your news article</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='title1'>News Title</label>
            <input
              type='text'
              id='title1'
              name='title1'
              value={values.title1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='performers'>Performers</label>
            <input
              type='text'
              name='performers'
              id='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='venue'>Venue</label>
            <input
              type='text'
              name='venue'
              id='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='time'>Time</label>
            <input
              type='text'
              name='time'
              id='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>News Description</label>
          <textarea
            type='text'
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type='submit' value='Add News' className='btn' />
      </form>
            </Layout>
    )
}
