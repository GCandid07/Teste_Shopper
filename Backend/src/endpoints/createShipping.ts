import { Request, Response } from "express";
import { ShippingDatabase } from "../database/ShippingDatabase";
import { Shipping } from "../models/Shipping";

export const createShipping = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { order_id, initial, final } = req.body;

    if(!order_id || !initial || !final){
      errorCode = 422;
      throw new Error("Required values(order_id, initial, final).");
    };

    const shippingDatabase = new ShippingDatabase();
    const newShipping = new Shipping(
      order_id,
      initial,
      final
    );

    const shipping = await shippingDatabase.createShipping(newShipping);

    res.status(201).send({message: "Created Sucessfully!", shipping});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  };
};