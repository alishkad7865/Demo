console.log("hey");
var ob={name:"alish", age:21};
console.log(JSON.stringify(ob));
const calc= require(__dirname +"/calculator.js");
const add = calc.add;
console.log(add(3,5));
//calc.writeFileSync(__dirname+ "/object.json", JSON.stringify(ob), "UTF8",function(err){ if(err){console.log(err);}});
const express= require('express');
const app = express();
const port =3000;
app.listen(port, function(){
    console.log("server is running on port: " + port);
});
app.get("/", function(req,res){
    res.send("<h4> Hello World</h4>")
});
app.get("/about", function(req,res){
    res.send("<h3> My name is Alish kadiwal and I am third year software student. I really wanna sleep no joke!!</h3>");
});
app.get("/request", function(req,res){
    res.send("<h3> My name is Alish kadiwal and I am third year software student. I really wanna sleep no joke!!</h3>");
});
//class 
