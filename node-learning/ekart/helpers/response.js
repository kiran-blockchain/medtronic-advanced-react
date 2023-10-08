module.exports.response =(res,data,error,success)=>{
    res.json({
        error,
        data,
        success
    })
}