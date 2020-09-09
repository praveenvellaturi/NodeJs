var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 let data=[{
   name:"Kiran",
   age: 30,
   salary:40000
 },
 {
   name:'praveen',
   age: 21,
   salary:30000
 }
]
res.render('index',{
  title:'express',
  myName:"Praveen",
  users:data
});
});
module.exports=router;
