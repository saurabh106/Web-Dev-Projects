const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
        },
        Image:{
            type:String,
            default:"https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?s=2048x2048&w=is&k=20&c=pY7u4NPHlaA7nyFy-sMvlG8jmA5m7jH2kU0wKOciGtE=",
            set: (v) => v === "" ? "https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?s=2048x2048&w=is&k=20&c=pY7u4NPHlaA7nyFy-sMvlG8jmA5m7jH2kU0wKOciGtE=" : v,
        },
        price:{
            type:Number,
            required:true
        },
        location:String,
        country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;