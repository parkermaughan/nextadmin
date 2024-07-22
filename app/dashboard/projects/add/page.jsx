import { addProject } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/project/addProject/addProject.module.css';

const AddProjectPage = () => {
    return (
        <div className={styles.container}>
            <form action={addProject} className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                
                <input type="number" placeholder='price' name="price" />
                
                <input type="text" placeholder='link' name="link" />
                
                <textarea name="desc" id="desc" rows="16" placeholder='Discription'>Discription</textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProjectPage;
