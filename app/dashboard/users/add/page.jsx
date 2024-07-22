import { addUser } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/users/addUsers/addUsers.module.css';

const AddusersPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                />
                <input type="text" placeholder="email" name="email" required />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <input type="text" placeholder="phone" name="phone" required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddusersPage;
