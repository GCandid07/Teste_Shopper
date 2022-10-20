import { Request, Response } from "express";
import { ShoppingCartDatabase } from "../database/ShoppingCartDatabase";

export const getAllShoppings = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.query.id as string

    if(!id){
      errorCode = 422;
      throw new Error("Required id.");
    }

    const shoppingCartDatabase = new ShoppingCartDatabase()
    const result = await shoppingCartDatabase.getAllShoppings("client_id", id)

    if(!result.length){
      errorCode = 404;
      throw new Error("Name not found.");
    };

    res.status(200).send({shoppingCart: result})
  } catch (error: any) {
    res.status(errorCode).send({message: error.message});
  };
};
