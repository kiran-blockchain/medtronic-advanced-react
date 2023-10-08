const { GetProducts, AddProduct, EditProduct } = require("../controllers/product.controller");
const { GetUsers } = require("../controllers/user.controller");
const { getUsers } = require("../dataaccess/users");

module.exports.AppRoutes =(app)=>{
    app.get("/api/users",GetUsers);
  app.get("/api/products",GetProducts);
  app.get("/api/add",AddProduct,GetProducts);
  app.post("/api/edit",EditProduct);
}