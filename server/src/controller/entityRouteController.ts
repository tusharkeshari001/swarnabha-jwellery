import { Request, Response } from "express-serve-static-core";
import AllEntities from '../json-files/entity-file/AllEntities.json';

export const getAllEntities = async (req: Request, res: Response) => {
    res.json(AllEntities);
  };

//   export const postStompData = async (req: Request, res: Response) => {
//     // console.log(req.params);
//     // console.log(req.query);
//     res.json({ name: "Tushar Keshari", age: 26, message: "Welcome to grn" });
//   };

//   export const postStompData = async (req: Request, res: Response) => {
//     // console.log(req.params);
//     // console.log(req.query);
//     res.json({ name: "Tushar Keshari", age: 26, message: "Welcome to grn" });
//   };