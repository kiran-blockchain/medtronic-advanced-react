const { GetProducts, AddProduct, EditProduct } = require("../controllers/product.controller")

module.exports.AppRoutes =(app)=>{
  app.get("/api/products",GetProducts);
  app.get("/api/add",AddProduct,GetProducts);
  app.post("/api/edit",EditProduct);
}