const mongoose = require("mongoose");

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreatedIndex:true,
// }
const connection = mongoose
  .connect(process.env.MONGO_URL, {
    autoIndex: true,
    minpoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("mongo db connected sucesfully"))
  .catch((err) => {
    console.log(err.message);
  });

module.exports = connection;
