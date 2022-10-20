import { Request, Response } from "express";
import { ProductDatabase } from "../database/ProductDatabase";

export const getProductsById = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id

    if(!id){
      errorCode = 422;
      throw new Error("Required id");
    };

    const productDatabase = new ProductDatabase();
    const result = await productDatabase.getProductById(id);

    if(!result.length){
      errorCode = 404;
      throw new Error("Product not found.");
    };

    res.status(200).send({product: result});
  } catch (error: any) {
    res.status(errorCode).send({message: error.message});
  };
};
