import styles from './rightbar.module.css';
import Todo from './todo/todo';
import Goal from './goal/goal';
const rightbar = () => {
    return (
        <div className={styles.rightbar}>
            <div className={styles.todo}>
                <Todo />
            </div>
            <div className={styles.goal}>
                <Goal />
            </div>
        </div>
    );
};

export default rightbar;
