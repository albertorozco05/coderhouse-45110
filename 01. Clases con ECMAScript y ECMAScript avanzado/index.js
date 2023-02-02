const { bebida, zapato } = require("./database/products");
const { ProductManager } = require("./class/ProductManager");

// I N S T R U C T I O N S

// 1. Create a new instance of ProductManager
const productManager = new ProductManager();

// 2. getProducts() should return an empty array
console.log(productManager.getProducts());

// 3. addProduct() should add a new product to the products array
productManager.addProduct(bebida);

// 4. getProducts() should return an array with one product inside
console.log(productManager.getProducts());

// 5. addProduct() should add a new product to the array of products, but this time the product will have a code that already exists in the array of products."
productManager.addProduct(zapato);

// 6. getProductsById() should return the product with the id 1 (the product that was added first) or an error message if the product is not found.
productManager.getProductById(11);