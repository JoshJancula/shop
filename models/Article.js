var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  
  date: {
    type: String,
    required: true
  },
  
    summary: {
      type: String,
      required: true
    },
  
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
