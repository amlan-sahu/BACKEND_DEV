import dotenv from "dotenv";
import connectDB from "../db/index.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`\n Server is running on PORT: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("MONGODB connection FAILED ", error);
    
})