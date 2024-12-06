import { createUserInDB, findUserByClerkId } from "../repositories/user.repository.js";
import { Request, Response } from "express";

export async function createUserController(req: Request, res: Response) {

	try {
		const { clerkUserId, email, username } = req.body;

		const existingUser = await findUserByClerkId(clerkUserId);

		if(existingUser){
			res.status(409).json({
				message: "User already exists",
			});
		}

		const newUser = await createUserInDB({ clerkUserId, email, username });
	
		return res.status(201).json({
			message: "User created successfully",
			user: newUser,
		});
	} catch (error) {
		console.error("Error creating user:", error);
    	return res.status(500).json({
      	message: "Internal server error",
		error: error,
    });
	}

};