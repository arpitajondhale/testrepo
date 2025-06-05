const express = require("express");
const app = express();


const products = 
    [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "maxPrice": 35.99,
    "minPrice": 19.99,
    "category": "Electronics"
  },
  {
    "id": 2,
    "name": "Gaming Keyboard",
    "maxPrice": 89.99,
    "minPrice": 59.99,
    "category": "Electronics"
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "maxPrice": 120.0,
    "minPrice": 75.0,
    "category": "Footwear"
  },
  {
    "id": 4,
    "name": "Office Chair",
    "maxPrice": 250.0,
    "minPrice": 150.0,
    "category": "Furniture"
  },
  {
    "id": 5,
    "name": "Blender",
    "maxPrice": 99.99,
    "minPrice": 49.99,
    "category": "Home Appliances"
  }
];

app.get("/products", (req,res)=>{
   const {category,maxPrice,minPrice,search} = req.query;


   let filtered = products;
   if(category){
    filtered = filtered.fliter (p => p.category.toLowerCase() === category.toLowerCase())
   }

   if(maxPrice){
    filtered = filtered.filter (p => p.maxPrice  <= parseInt(maxPrice))
   }
   if(minPrice)
    filtered = filtered.filter (p => p.minPrice  <= parseInt(minPrice))

    
  }
)