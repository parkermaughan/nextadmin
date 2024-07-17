import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Link from 'next/link';
import Image from 'next/image';
const UsersPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Search placeholder="Search for a user..." />
                    <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Created at</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src="/noavatar.png"
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                        alt="User profile picture" // Meaningful description
                                    />
                                    John Doe
                                </div>
                            </td>
                            <td>John&gmail.com</td>
                            <td>12.12.2021</td>
                            <td>Admin</td>
                            <td>Active</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href="/dashboard/users/edit">
                                        <button
                                            className={`${styles.button} ${styles.view}`}>
                                            Edit{' '}
                                        </button>
                                    </Link>
                                    <button
                                        className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    );
};
export default UsersPage;
