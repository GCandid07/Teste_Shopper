import fs from 'fs'
import csv from "csv-parser"

interface IProduct {
  id: string,
  name: string,
  price: string,
  qty_stock: string
}

const ReadCsvData = async(filename: string) => {
  return new Promise((resolve) => {
    const results: string[] = [];

    fs.createReadStream(filename)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results));
  })
};

export const loadFile = async () => {

  const products = await ReadCsvData('products.csv') as IProduct[]
  return products.map((prod) => ({...prod}))

};
