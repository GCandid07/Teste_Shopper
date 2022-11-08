import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Table_Products";

  public async getAllProducts() {
    const result = await ProductDatabase
    .connection(ProductDatabase.TABLE_PRODUCTS)
    .select();

    return result;
  };

  public async getProductById(id: string) {
    const result = await ProductDatabase
    .connection(ProductDatabase.TABLE_PRODUCTS)
    .select()
    .where({id});

    return result;
  };

  public async editStockProducts(id: string, qty_stock: number){
    const result = await ProductDatabase
    .connection(ProductDatabase.TABLE_PRODUCTS)
    .update({qty_stock})
    .where({id})

    return result
  }
};
