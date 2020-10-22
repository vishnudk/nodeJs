var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');  


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*Process GET Form*/
router.get('/process_get',  function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end('Get Response '+JSON.stringify(response));  
}); 

/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

router.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end('Post Response '+JSON.stringify(response));  
}); 

module.exports = router;
