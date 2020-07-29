const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    const conn = await mongoose.connect("MongoDB_connection_string", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
