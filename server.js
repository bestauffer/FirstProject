// Import essential libraries 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 

// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 

router.get('/louisa', function(req, res) { 
    res.sendFile(path.join(__dirname + '/louisa.html')); 
}); 

router.get('/teresa', function(req, res) { 
    res.sendFile(path.join(__dirname + '/teresa.html')); 
}); 

router.get('/john', function(req, res) { 
    res.sendFile(path.join(__dirname + '/john.html')); 
}); 

router.get('/blake', function(req, res) { 
    res.sendFile(path.join(__dirname + '/blake.html')); 
}); 

//add the router 
app.use('/', router); 
// app.listen(process.env.port || 3000); // commented, throws error Error: listen EADDRINUSE: address already in use :::3000
console.log('Running at Port 3000'); 