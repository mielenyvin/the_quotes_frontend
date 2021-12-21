import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; the Quotes</p>
            <Link href='/about'><div className='cursor-pointer text-qellow hover:text-qblue-900' >About This Project</div></Link>
        </footer>
    )
}
