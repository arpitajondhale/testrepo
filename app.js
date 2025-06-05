// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express()

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function (req,res){
//     res.sendFile(__dirname + "/index.html")
// }) 

// app.post( "/add" ,function(req,res){
//     const n1 = Number(req.body.num1);
//     const n2 = Number(req.body.num2);
//     const result = n1 + n2;
//     res.send("The addition is " + result);

// })

// app.get("/User/:id/:pass",function(req,res){
//     res.send("User ID is " + req.params.id + " and Password is " + req.params.pass);
    
// })


// app.listen(3000,function(){
//     console.log("server is running on port 3000");
// })









const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add", function (req, res) {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1 + n2;
  res.send("The addition is " + result);
});



app.post("/sub", function (req, res) {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1 - n2;
  res.send("The subtaction is " + result);
});


app.post("/mul", function (req, res) {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1 * n2;
  res.send("The multiplication is " + result);
});


app.post("/div", function (req, res) {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1  / n2;
  res.send("The Division is " + result);
});


app.post("/mod", function (req, res) {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1 % n2;
  res.send("The modulus is " + result);
});




app.get("/User/:id/:pass", function (req, res) {
  res.send("User ID is " + req.params.id + " and Password is " + req.params.pass);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});