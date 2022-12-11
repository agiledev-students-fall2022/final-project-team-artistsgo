const express = require("express");
require("dotenv").config({ path: "../../.env" });
require("dotenv").config({ silent: true });
const path = require("path");
const multer = require("multer");
const cors = require("cors");
// const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const authRouter = require("./Auth");
const urlencodedparser = bodyParser.urlencoded({ extended: false });
const { Product } = require("./models/Product");
const { User } = require("./models/User");

const app = express();
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use("/static", express.static("public"));
/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Request-Private-Network', 'true');
  res.setHeader('Access-Control-Allow-Private-Network', 'true');
  next();
}); */

app.use(
  cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json(), urlencodedparser);

const connectionparams = {
  useNewUrlParser: "true",
  useUnifiedTopology: "true",
};
mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`, connectionparams)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

app.use(express.static(path.join(__dirname, "..", "front-end", "build")));

app.get(/^((?!api).)*$/, function (req, res) {
  // console.log(req);
  console.log("general request");
  res.sendFile(path.join(__dirname, "..", "front-end", "build", "index.html"));
});
app.use("/api", authRouter);

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"]?.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({ isLoggedIn: false, message: "incorrect token" });
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({ message: "no token", isLoggedIn: false });
  }
}

app.get("/api/isUserAuth", verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

app.get("/api/user/info", verifyJWT, (req, res) => {
  User.findById(req.user.id).then((dbUser) => {
    const user = { email: dbUser.email, username: dbUser.username };
    res.json({ user: user, message: "user info retrieved" });
  });
});

app.get("/api/product", async (req, res) => {
  console.log("api request");
  try {
    const products = await Product.find({});
    res.json({
      products: products,
      status: "all good",
    });
  } catch (err) {
    // console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve products from the database",
    });
  }
});

app.get("/api/product/:productId", async (req, res) => {
  console.log(req.params.productId);
  const productId = req.params.productId;
  console.log(productId);
  try {
    const product = await Product.findById(productId);
    console.log(product);
    res.json({
      product: product,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(501).json({
      error: err,
      status: "failed to retrieve product from the database",
    });
  }
});

app.get("/api/product/collection/:collectionName", async (req, res) => {
  console.log(req.params.collectionName);
  const collectionName = req.params.collectionName;
  console.log(collectionName);
  try {
    const products = await Product.find({ tags: collectionName });
    console.log(products);
    res.json({
      products: products,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve product from the database",
    });
  }
});

app.get("/api/product/:name", async (req, res) => {
  console.log(req.params.name);
  const name = req.params.name;
  console.log(name);
  try {
    const product = await Product.find({ name: name });
    console.log(product);
    res.json({
      product: product,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve product from the database",
    });
  }
});

app.get("/api/user", async (req, res) => {
  // load all users from database
  try {
    const users = await User.find({});
    res.json({
      users: users,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve products from the database",
    });
  }
});

app.get("/api/user/:username", async (req, res) => {
  console.log(req.params.username);
  const username = req.params.username;
  console.log(username);
  try {
    const user = await User.find({ username: username });
    console.log(user);
    res.json({
      user: user,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve user from the database",
    });
  }
});

app.post("/api/product/save", async (req, res) => {
  // try to save the message to the database
  try {
    const product = await Product.create({
      likes: req.body.likes,
      product: req.body.product,
    });
    return res.json({
      product: product, // return the message we just saved
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err,
      status: "failed to save the message to the database",
    });
  }
});

app.use("/api/images/", express.static(path.join(__dirname, "images")));
//store upload images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post("/api/product/add", upload.single("photo"), async (req, res) => {
  try {
    req.body.photo = req.file.path;
    const newProduct1 = new Product({
      name: req.body.name,
      description: req.body.description,
      author_username: req.body.author_username,
      price: req.body.price,
      tags: JSON.parse(req.body.tags),
      image: req.body.photo,
      likes: req.body.lkes,
    });
    const createProduct = await newProduct1.save();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = app;
