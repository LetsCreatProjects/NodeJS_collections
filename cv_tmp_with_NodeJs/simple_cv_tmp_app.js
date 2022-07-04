const http = require("http");
const fs = require('fs');  // file system module

const port = 3000;

const server = http.createServer(function (req, res) {
  fs.readFile('/home/osboxes/repositories/node_js/app_v0/cv_tmp_with_NodeJs/index.html', (err, data) =>{
    if(err){
        console.log(err);
        res.end();
    } else{
        res.write(data);
        res.end();
 } });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Please check log", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
