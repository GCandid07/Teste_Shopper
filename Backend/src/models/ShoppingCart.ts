export class ShoppingCart {
  constructor(
    private quantity: number,
    private price: number,
    private client_id: string,
    private product_id: string
  ){
    this.quantity = quantity,
    this.price = price,
    this.client_id = client_id,
    this.product_id = product_id
  };

  public getQuantity(){
    return this.quantity
  };
  public getPrice(){
    return this.price
  };
  public getClient_id(){
    return this.client_id
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
  public setClient_idClients(newClient_id: string){
    this.client_id = newClient_id
  };
  public setProduct_id(newProduct_id: string){
    this.product_id = newProduct_id
  };
};
