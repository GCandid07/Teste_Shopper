export class Order {
  constructor(private client_id: string) {
    this.client_id = client_id
  }

  getClientID (){
    return this.client_id;
  };

  setClientID (newClientId: string){
    this.client_id = newClientId;
  };
}