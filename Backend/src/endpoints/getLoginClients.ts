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
      console.log(result)
      errorCode = 404
      throw new Error("Usuário não encontrado.");
    }

    res.status(200).send({account: result});
  } catch (error: any) {
    res.status(errorCode).send({message: error.message});
  };
};
