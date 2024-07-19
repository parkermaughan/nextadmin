import styles from '@/app/login/login.module.css';
const loginPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input type="username" id="username" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" id="password" className={styles.input} />
                </div>
                <button className={styles.button}>Login</button>
            </form>
        </div>
    );
};
export default loginPage;
