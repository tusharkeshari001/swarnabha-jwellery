import { Request, Response } from "express";
// import { wss } from "../server";
import Stomp from "stompjs";

export const grnHomePage = async (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ message: "swarabha jwellery home page" });
};

export const grnUserList = async (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ message: "swarabha jwellery User List" });
};

export const postStompData = async (req: Request, res: Response) => {
  // console.log(req.params);
  // console.log(req.query);
  res.json({ name: "Tushar Keshari", age: 26, message: "Welcome to grn" });
};

export const getStompData = async (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.query);
  // console.log(req);
  res.json({ name: "Tushar Keshari", age: 26, message: "Welcome to grn" });
};

export const grnUser = async (req: Request, res: Response) => {
  console.log(req.params.userid);
  const { userid } = req.params;
  if (userid == "1111") {
    res.json({ name: "Tushar Keshari", age: 26, message: "Welcome to grn" });
  } else if (userid == "1212") {
    res.json({ name: "manu Keshari", age: 26, message: "Welcome to grn" });
  } else if (userid == "1313") {
    res.json({ name: "muskan Keshari", age: 26, message: "Welcome to grn" });
  } else if (userid == "1414") {
    res.json({ name: "aman Keshari", age: 26, message: "Welcome to grn" });
  } else if (userid == "1515") {
    res.json({ name: "sajal Keshari", age: 26, message: "Welcome to grn" });
  } else {
    res.json({ message: "Data Not Found" });
  }
};
