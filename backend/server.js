const app = require("./app");
const dotenv = require("dotenv");

const cloudinary = require("cloudinary");

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shuttting down server due to uncaught exception`);
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}

const connectDatabase = require("./config/database");

connectDatabase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.msg}`);
  console.log(`Shuttting down server due to unhandle promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
