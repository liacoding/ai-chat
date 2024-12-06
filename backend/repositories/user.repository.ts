import { User, IUser } from "../models/user.model.js";

type CreateUserInput = {
  clerkUserId: string;
  email: string;
  username: string;
};

export const findUserByClerkId = async (clerkUserId: string) => {
    return await User.findOne({ clerkUserId });
};

export const createUserInDB = async (userData: CreateUserInput) => {
    return await User.create(userData);
};