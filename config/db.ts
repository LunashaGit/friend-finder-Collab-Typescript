import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.USER +
      ":" +
      process.env.PSWD +
      "@cluster0.z6uu4.mongodb.net/hobbies"
  )
  .then(() => {
    console.log("⚡️[server]: Connect to MongoDB");
  })
  .catch((err) => {
    console.log("⚡️[server]: Failed to connect to MongoDB", err);
  });
