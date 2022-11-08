import { Request, Response } from "express";
import { ClientDatabase } from "../database/ClientDatabase";
import { Authenticator } from "../sevices/Authenticator";
import { HashManager } from "../sevices/HashManager";

const authenticator = new Authenticator()

export const getLoginClients = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const email = req.query.email as string;
    const password = req.query.password as string;

    const clientDatabase = new ClientDatabase();
    const hashManager = new HashManager();

    const user = await clientDatabase.getLoginClients(email);

    if(!user.length) {
      errorCode = 404;
      throw new Error("E-mail e/ou senha inválidos.");
    }

    const isValidPassword = await hashManager.compare(password, user[0].password);

    if(!isValidPassword) {
      errorCode = 404;
      throw new Error("Senha incorreta.");
    };

    const token = authenticator.generateToken({id: user[0].id})

    res.status(200).send({message: "User found!", token});
  } catch (error: any) {
    res.status(errorCode).send({message: error.message});
  };
};
