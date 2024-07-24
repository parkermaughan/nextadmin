'use server';

import { revalidatePath } from 'next/cache';
import { Project, User } from './models';
import { connectToDB } from './utils';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { signIn } from '../auth';

// ADD USERS
export const addUser = async (formData) => {
    const { username, email, password, phone, isAdmin } =
        Object.fromEntries(formData);

    try {
        connectToDB();

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
// Update User
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, isAdmin } =
        Object.fromEntries(formData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const updateFields = {
            username,
            email,
            password: hashedPassword,
            phone,
            isAdmin,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === '' || undefined) &&
                delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to update user!');
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
};
// Delete User
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();

        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete user!');
    }

    revalidatePath('/dashboard/users');
};
// ADD PROJECT
export const addProject = async (formData) => {
    const { title, desc, link, price } = Object.fromEntries(formData);

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
// update project
export const updateProject = async (formData) => {
    const { id, title, desc, link, price } = Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            title,
            desc,
            link,
            price,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === '' || undefined) &&
                delete updateFields[key]
        );

        await Project.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to update project!');
    }

    revalidatePath('/dashboard/projects');
    redirect('/dashboard/projects');
};
// Delete Project
export const deleteProject = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();

        await Project.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete project!');
    }

    revalidatePath('/dashboard/products');
};

// Authenticate Login
export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password
        });
        if (result.error) {
            return { error: 'Failed to login!' };
        }
        return { error: null }; // Or return user data if needed
    } catch (err) {
        console.error(err);
        return { error: 'Failed to login!' };
    }
};

