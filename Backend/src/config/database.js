const mongoose = require("mongoose")



async function connectToDB() {
    try {
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
        if (!uri) {
            console.error("Error: Neither MONGO_URI nor MONGODB_URI environment variable is defined.");
            return;
        }
        await mongoose.connect(uri);
        console.log("Connected to Database");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

module.exports = connectToDB