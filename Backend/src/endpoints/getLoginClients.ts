import { Request, Response } from "express";
import { ClientDatabase } from "../database/ClientDatabase";

export const getLoginClients = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const email = req.query.email as string;
    const password = req.query.password as string;

    const clientDatabase = new ClientDatabase();
    const result = await clientDatabase.getLoginClients(email, password);

    if(!result.length){
      errorCode = 404
      throw new Error("E-mail e/ou senha inválidos.");
    }

    res.status(200).send({message: "User found!", account: result[0]});
  } catch (error: any) {
    res.status(errorCode).send({message: error.message});
  };
};
