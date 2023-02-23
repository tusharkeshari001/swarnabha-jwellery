import { Request, Response } from "express";

export const loginUser = async (req:Request, res:Response) => {
    res.send('logged in')
}

export const signupUser = async (req:Request, res:Response) => {
    res.send('signed up')
}