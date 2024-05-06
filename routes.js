const http =require("http");
const host='localhost';
const port = 8000;

const requestListener = function(req,res) {};

const server = http.createServer(requestListener);
server.listen(ort,host,()=>{
    console.log(`server is running on http://${host}:${port}`);
});