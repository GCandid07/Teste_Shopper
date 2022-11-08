import { Request, Response } from "express";
import { ClientDatabase } from "../database/ClientDatabase";
import { Client } from "../models/Client";
import { IdGenerator } from "../sevices/IdGenerator";
import { HashManager } from "../sevices/HashManager";
import { Authenticator } from "../sevices/Authenticator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator

export const createClient = async (req: Request, res: Response):Promise<void> => {
  let errorCode = 400;
  try {
    const name = req.body.name as string;
    const email = req.body.email as string;
    const password = req.body.password as string;

    const clientDatabase = new ClientDatabase();
    const hashManager = new HashManager();

    if(!name || !email || !password){
      errorCode = 422;
      throw new Error("Required name, email and password.");
    };

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      errorCode = 422;
      throw new Error("Digite o email da seguinte maneira (email@email.com)");
    };

    const getEmail = (await clientDatabase.getClientByEmail(email))

    if(getEmail.length){
      errorCode = 409;
      throw new Error("Email já existente");
    }

    const id = idGenerator.generateId()

    const hashPassword: string = await hashManager.hash(password)
    
    const newClient = new Client(
      id,
      name,
      email,
      hashPassword,
      Date.now().toString()
    );

    clientDatabase.createClient(newClient);

    const token = authenticator.generateToken({id})
    
    res.status(201).send({message: "Created Sucessfully!", token});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  };
};
