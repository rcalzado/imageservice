var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bd_imagens');

var imageSchema = new mongoose.Schema(
  {
    filename: String,  
  }, 
  { collection: 'tb_imagens' }
);

module.exports = { Mongoose: mongoose, ImageSchema: imageSchema }
