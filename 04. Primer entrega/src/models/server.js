const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.productsPath = "/api/products";
    this.cartsPath = "/api/carts";
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use(this.productsPath, require("../routes/products.route"));
    this.app.use(this.cartsPath, require("../routes/cart.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port", this.port);
    });
  }

  start() {
    this.middlewares();
    this.routes();
    this.listen();
  }
}

module.exports = Server;