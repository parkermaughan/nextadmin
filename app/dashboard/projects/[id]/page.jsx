import styles from '@/app/ui/dashboard/project/singleProject/singleProject.module.css';
import Image from 'next/image';

import { updateProject } from "@/app/lib/actions";
import { fetchSingleProject } from "@/app/lib/data";



const SingleProjectPage = async ({ params }) => {
  
  const { id } = params;
  const project = await fetchSingleProject(id);
    return (
        <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {project.title}
      </div>
      <div className={styles.formContainer}>
      <form action={updateProject} className={styles.form}>
          <input type="hidden" name="id" value={project.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={project.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={project.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={project.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={project.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={project.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={project.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
    );
};
export default SingleProjectPage;
