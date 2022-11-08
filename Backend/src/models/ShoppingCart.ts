export class ShoppingCart {
  constructor(
    private quantity: number,
    private price: number,
    private order_id: string,
    private product_id: string
  ){
    this.quantity = quantity,
    this.price = price,
    this.order_id = order_id,
    this.product_id = product_id
  };

  public getQuantity(){
    return this.quantity
  };
  public getPrice(){
    return this.price
  };
  public getOrder_id(){
    return this.order_id
  };
  public getProduct_id(){
    return this.product_id
  };

  public setQuantity(newQty: number){
    this.quantity = newQty
  };
  public setPrice(newPrice: number){
    this.price = newPrice
  };
  public setClient_idOrder(newOrder_id: string){
    this.order_id = newOrder_id
  };
  public setProduct_id(newProduct_id: string){
    this.product_id = newProduct_id
  };
};
