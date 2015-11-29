var mongoose = require('mongoose'); 

var blogSchema = new mongoose.Schema({  
  name: String,
  phone: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('Blog', blogSchema);


