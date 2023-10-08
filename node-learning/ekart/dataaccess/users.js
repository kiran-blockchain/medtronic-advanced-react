const { User } = require("../schema/users")

const getUsers =async()=>{
    try{
        result = await User.find({});
        console.log(result);
        return result;
    }
    catch(ex){
        console.log(ex);
        throw ex;
    }
}

module.exports={
    getUsers
}