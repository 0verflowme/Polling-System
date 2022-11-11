const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('err', () => {
   console.log.bind(console, "Something went wrong while turning on DB");
});

db.once("open", () => {
   console.log("Connection to db successful");
})