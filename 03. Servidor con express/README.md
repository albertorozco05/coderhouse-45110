## Servidor con express

### 1. Instalación

```bash
git clone https://github.com/gomeznahuel/coderhouse-45110
cd 03. Servidor con express
npm install
```

#### 2. Ejecución

```bash
npm start
```

#### 3. Use of the REST API.

###### 3.1. Get all products

```bash
http://localhost:3000/products
```

###### 3.2. Get a product by id

```bash
http://localhost:3000/products/:id
```

###### 3.3. Get a product list by limit

```bash
http://localhost:3000/products?limit=5
```

#### 4. Let me show you what the project structure is like.

```bash
├── node_modules
├── src
│   ├── container
|       ├── ProductManager.js 
|   ├── controllers
|       ├── ProductsController.js
│   ├── database
|       ├── db.json
│   ├── models
|       ├── server.js
│   ├── routes
|       ├── products.route.js
├── index.js
├── package-lock.json
├── package.json
├── README.md
```

#### 5. Explanation of the project files.


| File              | Explanation                                                                                          |  
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **/index.js** | Entry point of the application.                                                                          |
| **/src/container/ProductManager.js** | Manage the products.                                                              |
| **/src/controllers/ProductsController.js** | Class controller to connect the routes with the ProductManager.             |
| **/src/database/db.json** | Database file.                                                                               |
| **/src/models/server.js** | File for class server.                                                                       |
| **/src/routes/products.route.js** | This is the class that manages the routes.                                           |