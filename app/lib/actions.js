'use server';


import { connectToDB } from './utils';
import { User, Project } from './models';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';



export const addUser = async (formData) => {

    const { username, email, password, phone, isAdmin } =
        Object.fromEntries(formData);

    try {
        await connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            isAdmin,
        });

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error('Failed to create user!');
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
};

export const addProject = async (formData) => {
    const { title, desc, link, price} = Object.fromEntries(formData);

    try {
        await connectToDB();
 

        const newProject = new Project({
            title,
            desc,
            link,
            price,
        });

        await newProject.save();
    } catch (err) {
        console.log(err);
        throw new Error('Failed to create project!');
    }

    revalidatePath('/dashboard/projects');
    redirect('/dashboard/projects');
};
