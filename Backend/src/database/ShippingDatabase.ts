import { Shipping } from "../models/Shipping";
import { BaseDatabase } from "./BaseDatabase";

export class ShippingDatabase extends BaseDatabase{
  public static TABLE_SHIPPING = "Table_Shipping"

  public async createShipping(shipping: Shipping) {
    const result = await ShippingDatabase
    .connection(ShippingDatabase.TABLE_SHIPPING)
    .insert({
      order_id: shipping.getOrderId(),
      initial: shipping.getInit(),
      final: shipping.getFinal(),
    })

    return result
  }
}