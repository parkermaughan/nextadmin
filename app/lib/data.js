import { User } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
   console.log(q)
   const regex = new RegExp(q, 'i');
   try{
    connectToDB();
const users = await User.find({ username: {$regex: regex} });
return users;
   }
   catch(err){
       console.log(err);
       throw new Error('Could not fetch users');
   }
};
