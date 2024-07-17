import styles from './search.module.css';
import { IoSearchSharp } from 'react-icons/io5';

const search = ({ placeholder }) => {
    return (
        <div className={styles.container}>
            <IoSearchSharp />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
};

export default search;
