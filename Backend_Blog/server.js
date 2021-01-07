// Imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const posts = require("./routes/api/post");
const path = require("path");
require("dotenv").config(); // for loading environment variables

const users = require("./routes/api/user");


// App config
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
require("./middleware/passport")(passport);

// DB config
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected Successfully"))
    .catch(err => console.log(err));




// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     });
//  }

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});