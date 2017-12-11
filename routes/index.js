var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var db = require("../db");
  var Images = db.Mongoose.model('tb_imagens', db.ImageSchema, 'tb_imagens');
  
  Images.find({}).lean().exec(
     function (e, result) {
        var imgJSON = { 'images': [] };
        var size    = ['small', 'medium', 'large'];

        for (var n in result) {
          for (var t in size) 
            imgJSON.images.push({'url': `http://${req.headers.host}/images/${size[t]}/${result[n].filename}`});
        }

        res.json(200, imgJSON);
  });  
  
});

module.exports = router;
