import { Request, Response } from "express";
import { OrderDatabase } from "../database/OrderDatabase";
import { Order } from "../models/Order";
import { Authenticator } from "../sevices/Authenticator";

const authenticator = new Authenticator()

export const createOrder = async(req: Request, res: Response):Promise<void> => {
  let errorCode = 400;

  try {
    const token = req.body.token as string;
    if(!token){
      errorCode = 422;
      throw new Error("Required token.");
    };

    const { id } = authenticator.getTokenData(token);

    const orderDatabase = new OrderDatabase();
    const newOrder = new Order(
      id,
    );
    
    const order = await orderDatabase.createOrder(newOrder);

    res.status(201).send({orderID: order[0]});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  };
};