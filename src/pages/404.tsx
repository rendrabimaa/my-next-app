import styles from '@/styles/404.module.scss'

const Costum404 = () => {
    return (
        <div className={styles.error}>
            <img src="/404.png" alt="illustration not found" className={styles.error__image}/>
            <h1>404 | Halaman tidak ditemukan</h1>
        </div>
    )
}

export default Costum404;