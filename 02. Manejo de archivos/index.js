const ProductManager = require("./class/ProductManager");
const [bebida, harina, zapato, copita] = require("./products");

// Instance of ProductManager
const products = new ProductManager("./database/db.json");

// Get all products
// products.getProducts(); // []

// Add product
// products.addProduct(bebida); //         Bebida

// Get all products. Now we have 1 product.
// products.getProducts(); // [Bebida, Harina, Zapato, Copita]

// Get product by id
// products.getProductById(2); // Bebida

// Update product by id
// products.updateProduct(1, { stock: 50 }); // Updated

// Delete product by id
// products.deleteProductById(2); // Deleted

// Delete all products
// products.deleteAll(); // Deleted