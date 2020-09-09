var condition= 'positive';
var p= new Promise(function(resolve,reject){
    if(condition=='positive'){
        resolve("Iam good");
    }
    else{
        reject("Oops!!")
    }


});

p.then(function(response){
    console.log(response);
}).catch(function(errorresponse){
    console.log(errorresponse);
});