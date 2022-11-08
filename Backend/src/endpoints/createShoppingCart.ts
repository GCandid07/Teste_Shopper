import { Request, Response } from "express";
import { ShoppingCartDatabase } from "../database/ShoppingCartDatabase";
import { ShoppingCart } from "../models/ShoppingCart";

export const createShoppingCart = async (req: Request, res: Response):Promise<void> => {
  let errorCode = 400;
  try {
    const { quantity, price, order_id, product_id } = req.body;

    if(!quantity || !price || !order_id || !product_id){
      errorCode = 422;
      throw new Error("Required values.");
    };

    const shoppingCartDatabase = new ShoppingCartDatabase();

    const newShoppingCart = new ShoppingCart(
      quantity,
      price,
      order_id,
      product_id
    );

    shoppingCartDatabase.createShoppingCart(newShoppingCart);

    res.status(201).send({message: "Created Sucessfully!", shoppingCart: newShoppingCart});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  };
};
