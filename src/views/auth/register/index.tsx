import styles from './Register.module.scss'
import Link from 'next/link';

const RegisterView = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Register Page</h1>
            <div className={styles.register__form}>
                <form action="">
                    <div className={styles.register__form__item}>
                        <label htmlFor="email" className={styles.register__form__item__label}>Email</label>
                        <input type="email" name='email' placeholder='email' className={styles.register__form__item__input}/>
                    </div>
                    <div className={styles.register__form__item}>
                        <label htmlFor="fullname" className={styles.register__form__item__label}>Fullname</label>
                        <input type="text" name='fullname' placeholder='fullname' className={styles.register__form__item__input}/>
                    </div>
                    <div className={styles.register__form__item}>
                        <label htmlFor="password" className={styles.register__form__item__label}>Password</label>
                        <input type="password" name='password' placeholder='password' className={styles.register__form__item__input}/>
                    </div>
                    <div className={styles.register__form__item}>
                        <button type='submit' className={styles.register__form__item__button}>Register</button>
                    </div>
                </form>
            </div>
            <p className={styles.register__link}>
                Have an account? Signin <Link href={"/auth/login"}>here</Link>
            </p>
        </div>
    )
}

export default RegisterView;