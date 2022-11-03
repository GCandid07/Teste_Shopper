import connection from "./connections";
import { loadFile } from "../sevices/ReadCsvData";

const createTables = async () => {
  try {
    await connection.raw(`
      DROP TABLE IF EXISTS Table_Products, Table_Clients, Table_Shopping_Cart;

      CREATE TABLE IF NOT EXISTS Table_Products (
        id VARCHAR(100) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(8,2) NOT NULL,
        qty_stock INT NOT NULL
      );
        
      CREATE TABLE IF NOT EXISTS Table_Clients (
        id VARCHAR(100) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        token VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Table_Shopping_Cart (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        qty_total INT NOT NULL,
        price_total DECIMAL(8,2) NULL,
        client_id VARCHAR(100) NOT NULL,
        product_id VARCHAR(100) NOT NULL,
        FOREIGN KEY (client_id) REFERENCES Table_Clients(id),
        FOREIGN KEY (product_id) REFERENCES Table_Products(id)
      );
    `).then(async () => {
      console.log("Tables created sucessfully!");
      insertValues();
    });
  } catch (error: any) {
    console.log(error.sqlMessage);
  };
};

export const insertValues = async () => {
  try {
    const products = await loadFile()
    await Promise.all(products.map(async (prod) => {
      await connection("Table_Products")
      .insert(prod)
    }))
  } catch (error: any) {
    console.log(error.sqlMessage || error.message)
  } finally {
    console.log("Ending connection!")
    return connection.destroy()
  };
};

createTables()
