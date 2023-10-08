var http = require('http');
const loop = async()=>{
    console.log("i am requested");
     for(let i=0;i<10000000000;i++){

     }
    await Promise.resolve(res=>{
        console.log("I am  done");
     })
}
//create a server object:
http.createServer( async(req, res)=> {
    
    await loop();
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);