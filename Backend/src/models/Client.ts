export class Client {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private token: string,
  ){
    this.id = id,
    this.name = name,
    this.email = email,
    this.password = password,
    this.token = token
  };

  getID (){
    return this.id;
  };
  getName (){
    return this.name;
  };
  getEmail (){
    return this.email
  };
  getPassword (){
    return this.password
  };
  getToken (){
    return this.token
  };
  
  setID (newID: string){
    this.id = newID;
  };
  setName (newName: string){
    this.name = newName;
  };
  setEmail (newEmail: string){
    this.email = newEmail
  };
  setPassword (newPassword: string){
    this.password = newPassword
  };
  setToken (newToken: string){
    this.token = newToken
  };
};

export type AuthenticationData = {
  id: string
}
