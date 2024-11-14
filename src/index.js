import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/indexDB.js";

dotenv.config({
  path: "./.env",
});

//calling for DB connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running fine at PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed ", error);
  });


 