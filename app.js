var fetch = require('node-fetch')// fatch
var express = require('express')// express

var app = express()
app.get('/', function(req, resp){
   fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
   .then(resposta => resposta.json())
   .then(resposta => console.table(resposta))
   resp.end()// não cair em um looping

})
//
app.listen(8080)