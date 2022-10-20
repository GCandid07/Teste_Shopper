import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "./endpoints/createClient"
import { createShoppingCart } from "./endpoints/createShoppingCart";
import { getProducts } from "./endpoints/getProducts";
import { getProductsById } from "./endpoints/getProductsById";
import { getAllShoppings } from "./endpoints/getAllShoppings";
import { getLoginClients } from "./endpoints/getLoginClients";
import { editStock } from "./endpoints/editStock";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", getProducts)
app.get("/product/:id", getProductsById)
app.get("/cart", getAllShoppings)
app.post("/client", createClient)
app.post("/cart", createShoppingCart)
app.get("/login", getLoginClients)
app.put("/stock", editStock)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Server is running in port ${process.env.PORT || 3003}`);
});
