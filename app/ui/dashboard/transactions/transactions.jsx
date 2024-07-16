import Image from 'next/image';
import styles from './transactions.module.css';
const transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transaction </h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image
                                src="/noavatar.png"
                                alt="transaction1"
                                width={40}
                                height={40}
                                className={styles.useriamge}
                            />
                            John Doe
                        </td>
                        <td>
                            <span
                                className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>12.02.23</td>
                        <td>$5.00</td>
                    </tr>

                    <tr>
                        <td>
                            <Image
                                src="/noavatar.png"
                                alt="transaction1"
                                width={40}
                                height={40}
                                className={styles.useriamge}
                            />
                            John Doe
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>12.02.23</td>
                        <td>$5.00</td>
                    </tr>

                    <tr>
                        <td>
                            <Image
                                src="/noavatar.png"
                                alt="transaction1"
                                width={40}
                                height={40}
                                className={styles.useriamge}
                            />
                            John Doe
                        </td>
                        <td>
                            <span
                                className={`${styles.status} ${styles.cancelled}`}>
                                Canceled
                            </span>
                        </td>
                        <td>12.02.23</td>
                        <td>$5.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default transactions;
