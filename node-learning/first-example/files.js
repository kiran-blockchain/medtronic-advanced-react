const fs = require("fs/promises");

//fs.writeFileSync("demo.txt","welcome")
console.log("before creating");
// fs.writeFile("demo1.txt","welcome",(err)=>{
//     if(err!=null){
//         console.log(err)
//     }else{
//         console.log("file Created")
//     }
// });
fs.writeFile("demo2.text","Weolcome").then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})
console.log("after function");

const createFile = async()=>{
    try{
       await fs.writeFile("Demo3.txt",":Demo")
    }
    catch(ex){
        console.log(ex);
    }
}
createFile();