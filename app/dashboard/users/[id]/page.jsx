import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';
const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="user" fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" placeholder="John Doe" name="username" />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="john Done@test.com"
                        name="username"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="john Doe"
                        name="password"
                    />
                    
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;
