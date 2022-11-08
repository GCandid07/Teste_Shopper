import { ShoppingCart } from "../models/ShoppingCart";
import { BaseDatabase } from "./BaseDatabase";

export class ShoppingCartDatabase extends BaseDatabase {
  public static TABLE_SHOPPING_CART = "Table_Shopping_Cart";

  public async getAllShoppings(column: string, value: string){
    const result = await ShoppingCartDatabase
    .connection(ShoppingCartDatabase.TABLE_SHOPPING_CART)
    .select()
    .where(column , "like" , `%${value}%`);

    return result;
  };

  public async createShoppingCart (newShoppingCart: ShoppingCart) {
    const result = await ShoppingCartDatabase
    .connection(ShoppingCartDatabase.TABLE_SHOPPING_CART)
    .insert({
      qty_total: newShoppingCart.getQuantity(),
      price_total: newShoppingCart.getPrice(),
      order_id: newShoppingCart.getOrder_id(),
      product_id: newShoppingCart.getProduct_id()
    });

    return result;
  };
};
