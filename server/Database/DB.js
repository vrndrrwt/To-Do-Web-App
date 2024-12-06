import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Ensure a .env file with DB_URL is correctly set
const DB_URL = process.env.DB_URL;

const connection = () => {
    if (!DB_URL) {
        console.error("DB_URL is not set in the .env file");
        process.exit(1); // Exit the process if DB_URL is missing
    }

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("Database disconnected");
    });

    mongoose.connection.on("error", (error) => {
        console.error("Error while connecting with database:", error.message);
    });
};

export default connection;