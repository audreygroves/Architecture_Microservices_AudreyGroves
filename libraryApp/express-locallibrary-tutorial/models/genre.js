const mongoose = require("mongoose");

const Schema = mongoose.Schema; 


const GenreSchema = new Schema({
    genre_name: {type: String, required: true, maxlength: 100, minlength: 3},
})

// Virtual for the genre's URL

GenreSchema.virtual("url").get(function()
{
    `/catalog/genre/${this._id}`; 
})

//Export model

module.exports = mongoose.model("Genre", GenreSchema);