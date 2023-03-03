const { Router } = require("express");
const productsRouter = Router();

// Import the model class.
const ProductModel = require("../models/product.model");

// Instantiate the class.
const FileManager = require("../managers/fileManager");

// Create a new instance of the class.
const fileManager = new FileManager("./src/database/products.json");

// Middleware: Validate the data.
const ItemsValidate = require("../middlewares/itemsValidate");

// Multer.
const Upload = require("../lib/multer");

// Get all products.
productsRouter.get("/", async (req, res) => {
  const { limit } = req.query;
  
  try {
    const products = await fileManager.getData();
    
    if (limit && limit <= products.length) {
      const limitedProducts = products.slice(0, limit);
      res.status(200).json(limitedProducts);
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a product by id.
productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const product = await fileManager.getDataById(id);

    if (product) res.status(200).json(product);
    else res.status(404).json({ error: `Not data found with id ${id}.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Post a new product.
productsRouter.post("/", Upload, async (req, res) => {
  const { title, description, code, stock, category, price } = req.body; 

  // Create a new array only with the filenames.
  const files = await req.files.map(file => file.filename);

  // If some of the fields from req.body are empty, send a 400 error.
  if (ItemsValidate(title, description, code, stock, category, price)) {
    res.status(400).json({ error: "Some of the fields are empty." });
  } else {
      try {
        const newProduct = new ProductModel(title, description, code, Number(stock), category, Number(price), files);
        const product = await fileManager.postData(newProduct);
        res.status(200).json({ status: "success", payload: product });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
});

// // Put a product by id.
productsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, code, stock, category, price } = req.body;

  try {
    // Get the product by id.
    const product = await fileManager.getDataById(id);

    if (ItemsValidate(title, description, code, stock, category, price)) {
      res.status(400).json({ error: "Some of the fields are empty." });
      return;
    } 

    // Create a new product with the new data.
    const newProduct = new ProductModel(title, description, code, Number(stock), category, Number(price), product.files, product.status);  

    // Update the product.
    const updatedProduct = await fileManager.updateDataById(id, newProduct);

    if (!updatedProduct) res.status(404).json({ error: `Not data found with id ${id}.` });
    else res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

// Delete a product by id.
productsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await fileManager.deleteDataById(id);

    if (!product) res.status(404).json({ error: `Not data found with id ${id}.` });
    else res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = productsRouter;