import { Request, Response } from "express";
import { ProductDatabase } from "../database/ProductDatabase";

export const editStock = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.query.id as string
    const qty_stock = Number(req.body.qty_stock)
    
    const productDatabase = new ProductDatabase();
    productDatabase.editStockProducts(id, qty_stock)

    res.status(200).send({response: "Updated"})
  } catch (error: any) {
    res.status(errorCode).send({message: error.message});
  };
};
