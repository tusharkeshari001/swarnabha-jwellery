import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  res.json({ message: "logged in" });
};

export const signupUser = async (req: Request, res: Response) => {
  res.json({ message: "signed up" });
};
