import styles from '../../ui/dashboard/project/project.module.css';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Link from 'next/link';

import { CgWebsite } from "react-icons/cg";


const ProductsPage = () => {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a project..." />
                <Link href="/dashboard/projects/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Url</th>
                        <th>Date Created</th>
                        <th>Design</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.project}>
                                John Doe
                            </div>
                        </td>
                        <td><a href='' className={styles.
                            url
                        }><CgWebsite /> URL</a></td>
                        <td>12.12.2021</td>
                        <td>Design Place holder</td>
                        <td>Action</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/projects/edit">
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
            <Pagination/>
        </div>
    </div>
    );
};
export default ProductsPage;
