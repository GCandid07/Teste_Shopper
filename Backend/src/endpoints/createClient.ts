import { Request, Response } from "express";
import { ClientDatabase } from "../database/ClientDatabase";
import { Client } from "../models/Client";

export const createClient = async (req: Request, res: Response):Promise<void> => {
  let errorCode = 400;
  try {
    const name = req.body.name as string;
    const email = req.body.email as string;
    const password = req.body.password as string;

    if(!name || !email || !password){
      errorCode = 422;
      throw new Error("Required name, email and password.");
    };

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      errorCode = 422;
      throw new Error("Digite o email da seguinte maneira (email@email.com)");
    };

    const clientDatabase = new ClientDatabase();
    const getEmail = (await clientDatabase.getClientByEmail(email))

    if(getEmail.length){
      errorCode = 409;
      throw new Error("Email já existente");
    }

    const id = ((await clientDatabase.getAllClients()).length + 1).toString();
    
    const newClient = new Client(
      id,
      name,
      email,
      password,
      Date.now().toString()
    );

    clientDatabase.createClient(newClient);

    res.status(201).send({message: "Created Sucessfully!", account: newClient});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  };
};
