const { getUsers } = require("../dataaccess/users");
const { response } = require("../helpers/response")

module.exports.GetUsers=async(req,res)=>{
    try{
        const result = await getUsers();
        response(res,result,'',200);
    }catch(ex){
        response(res,[],"Error in fetching data",'');
    }

    
}