const path = require("path");
const fs = require("fs");

const loadRoutes = () => {
  const routesPath = path.join(`${__dirname}/../routes`);
  const routeFiles = fs.readdirSync(routesPath);

  return { routesPath, routeFiles };
};

module.exports = loadRoutes;