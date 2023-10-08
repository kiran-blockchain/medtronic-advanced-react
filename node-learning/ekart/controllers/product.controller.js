const { getProducts } = require("../dataaccess/product");
const { response } = require("../helpers/response");
const http = require('http')
const GetProducts =(req,res)=>{
   result= getProducts()
    response(res,result,'',200)
};
const AddProduct =(req,res,next)=>{
    console.log("I am in the add product");
    next();
    //res.json({result:"Product Added"})
};
const EditProduct =(req,res)=>{
    response(res,"Edited",'',200)
};

module.exports={
    GetProducts,
    AddProduct,
    EditProduct
}