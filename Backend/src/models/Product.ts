export type TProduct = {
  id: string,
  name: string,
  price: number,
  qty_stock: number
};

export class Product {

  constructor(
    private id: string,
    private name: string,
    private price: number,
    private qty_stock: number
  ) {
    this.id = id,
    this.name = name,
    this.price = price,
    this.qty_stock = qty_stock
  }

  public getId = () => {
    return this.id;
  };
  
  public getName = () => {
    return this.name;
  };

  public getPrice = () => {
    return this.price;
  };

  public getStock = () => {
    return this.qty_stock;
  };

  public setId = (newId: string) => {
    return this.id = newId;
  };
  
  public setName = (newName: string) => {
    return this.name = newName;
  };

  public setPrice = (newPrice: number) => {
    return this.price = newPrice;
  };

  public setStock = (newQuantity: number) => {
    return this.qty_stock = newQuantity;
  };
};
