import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Corrected path
import { app } from "./app.js"; // Ensure app.js exports the app

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\n Server is running on PORT: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection FAILED ", error);
  });