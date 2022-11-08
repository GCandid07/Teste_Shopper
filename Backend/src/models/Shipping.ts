export class Shipping {
  constructor(
    private order_id: string,
    private initial: Date,
    private final: Date,
  ){
    this.order_id = order_id,
    this.initial = initial,
    this.final = final
  };

  getOrderId(){
    return this.order_id
  };

  getInit(){
    return this.initial
  };

  getFinal(){
    return this.final
  };

  setOrderId(newOrderId: string){
    this.order_id = newOrderId
  };

  setInit(newInit: Date){
    this.initial = newInit
  };

  setFinal(newFinal: Date){
    this.final = newFinal
  };
};
