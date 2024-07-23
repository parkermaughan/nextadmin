import { User, Project } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i');

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB();
        const count = await User.find({
            username: { $regex: regex },
        }).countDocuments();
        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch users!');
    }
};

export const fetchSingleUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch users!');
    }
};

export const fetchProjects = async (q, page) => {
    const regex = new RegExp(q, 'i');

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB();
        const count = await Project.find({
            title: { $regex: regex },
        }).countDocuments();
        const projects = await Project.find({ title: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, projects };
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch projects!');
    }
};

export const fetchSingleProject = async (id) => {
  try {
      connectToDB();
      const project = await Project.findById(id);
      return project;
  } catch (err) {
      console.log(err);
      throw new Error('Failed to fetch users!');
  }
};

