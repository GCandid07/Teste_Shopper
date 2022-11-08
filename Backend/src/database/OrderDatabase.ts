import { Order } from "../models/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER = "Table_Order";

  public async createOrder (newOrder: Order) {
    const result = await OrderDatabase
    .connection(OrderDatabase.TABLE_ORDER)
    .insert({
      client_id: newOrder.getClientID()
    }).then((a) => a)

    return result
  }
}