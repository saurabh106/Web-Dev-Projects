const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing"); // coming from listings schema
const path = require("path"); // for ejs templates

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB")
}).catch(e => {
    console.log(e);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.get("/", (req, res) => {
    res.send("Hiii")
});


//Index Route 
app.get("/listings", async(req, res) => {
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
});







// app.get("/testlisting",async(req,res)=>{
//     let sampleListing = new Listing({
//         title: "Sample Listing",
//         description: "This is a sample listing",
//         price: 1000,
//         location: "Sample Location",
//         country:"India",
//     })
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("successful")
// });













































































































app.listen(8080, () => {
    console.log("server is running on port 8080");
});