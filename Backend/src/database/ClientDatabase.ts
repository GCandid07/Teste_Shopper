import { Client } from "../models/Client";
import { BaseDatabase } from "./BaseDatabase";

export class ClientDatabase extends BaseDatabase {
  public static TABLE_CLIENTS = "Table_Clients";

  public async getAllClients() {
    const result = await ClientDatabase
    .connection(ClientDatabase.TABLE_CLIENTS)
    .select("id");

    return result;
  }

  public async getLoginClients(email: string) {
    const result = await ClientDatabase
    .connection(ClientDatabase.TABLE_CLIENTS)
    .select()
    .where({email})

    return result;
  }

  public async getClientById(id: string) {
    const result = await ClientDatabase
    .connection(ClientDatabase.TABLE_CLIENTS)
    .select()
    .where({id});

    return result;
  };

  public async getClientByEmail(email: string) {
    const result = await ClientDatabase
    .connection(ClientDatabase.TABLE_CLIENTS)
    .select()
    .where({email})
    
    return result
  }

  public async createClient(newClient: Client){
    const result = await ClientDatabase
    .connection(ClientDatabase.TABLE_CLIENTS)
    .insert({
      id: newClient.getID(),
      name: newClient.getName(),
      email: newClient.getEmail(),
      password: newClient.getPassword(),
      token: newClient.getToken()
    });
    
    return result;
  };
};
