import { fetchUsers } from '@/app/lib/data';
import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Link from 'next/link';
import Image from 'next/image';

const UsersPage = async () => {
    const users = await fetchUsers();
    console.log(users);
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className={styles.user}>
                                        <Image
                                            src={user.img || '/noavatar.png'}
                                            width={40}
                                            height={40}
                                            className={styles.userImage}
                                            alt="User profile picture" // Meaningful description
                                        />
                                        {user.username}
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.createdAt?.toString().slice(4,16)}</td>
                                <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
                                <td>
                                    <div className={styles.buttons}>
                                        <Link
                                            href={`/dashboard/users/${user.id}`}>
                                            <button
                                                className={`${styles.button} ${styles.view}`}>
                                                View
                                            </button>
                                        </Link>
                                        <button
                                            className={`${styles.button} ${styles.delete}`}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    );
};
export default UsersPage;
