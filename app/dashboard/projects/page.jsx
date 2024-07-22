import { fetchProjects } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/project/project.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { RiPagesLine } from "react-icons/ri";


const ProjectsPage = async ({ searchParams }) => {
    const q = searchParams?.q || '';
    const page = searchParams?.page || 1;
    const { count, projects } = await fetchProjects(q, page);

    return (
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
                        <td>Name</td>
                        <td>Site</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>
                                <div className={styles.project}>
                                    <Image
                                        src={project.img || '/noavatar.png'}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.projectImage}
                                    />
                                    {project.title}
                                </div>
                            </td>
                            <td>
                                {' '}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {' '}
                                    <RiPagesLine />
                                </a>
                            </td>
                            <td>
                                {project.createdAt?.toString().slice(4, 16)}
                            </td>
                            <td>{project.isAdmin ? 'Admin' : 'Client'}</td>
                            <td>{project.isActive ? 'active' : 'passive'}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link
                                        href={`/dashboard/projects/${project.id}`}>
                                        <button
                                            className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <form action="">
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={project.id}
                                        />
                                        <button
                                            className={`${styles.button} ${styles.delete}`}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    );
};

export default ProjectsPage;
