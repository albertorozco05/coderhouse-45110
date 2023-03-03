const express = require("express");
const path = require("path");
const loadRoutes = require("../utils/loadRoutes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
  }

  #middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  #routes() {
    const { routesPath, routeFiles } = loadRoutes();

    routeFiles.forEach((routeFile) => {
      const { name: slug } = path.parse(routeFile);
      const route = require(path.join(routesPath, routeFile));
      this.app.use(`/api/${slug}`, route);
    });
  }

  #listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port", this.port);
    });
  }

  start() {
    this.#middlewares();
    this.#routes();
    this.#listen();
  }
}

module.exports = Server;
