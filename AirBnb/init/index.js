// All db logic here

const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("Connected to DB")
}).catch(e=>{
    console.log(e);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({}); // delete previous data
    await Listing.insertMany(initData.data); // add new data
    console.log("Data was initialized");
};

initDB();