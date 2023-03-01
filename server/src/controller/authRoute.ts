import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  res.json({ message: "logged in" });
};

export const home = async (req: Request, res: Response) => {
  res.json({ message: "Welcome to home" });
};
