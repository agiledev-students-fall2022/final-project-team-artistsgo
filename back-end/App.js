const express = require("express") 
const session = require("express-session")
const passport = require("passport")
require('dotenv').config( { path: '../../.env' } );
require("./Passport")
const app = express() 
const path = require("path")
const axios = require("axios")
//for uploading images
const multer= require("multer")
const { v4: uuidv4 } = require('uuid');
const cors = require("cors")
require("dotenv").config({ silent: true })
const mongoose = require('mongoose');
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
const authRoute = require("./routes/auth");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Any reference to /static/html.html would = /public/html.html
app.use("/static", express.static("public"))


//store upload images
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {   
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);


//FOR PASSPORT.JS
function isSignedIn(req, res, next) {
  req.user ? next() : res.status(401).json({ message: "Unauthorized" })
}

app.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Sign in with Google</a>');
});

app.get('/protected', isSignedIn, (req, res) => {
  res.send('Welcome to the protected route, ' + req.user.displayName + '!');
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('auth/google/callback', 
  passport.authenticate('google', { 
    successRedirect: '/protected',
    failureRedirect: '/auth/failuire',
   }),
);

app.get('/auth/failure', (req, res) => {
  res.send('You failed to authenticate!');
});

//END for PASSPORT.JS

const connectionparams={
  useNewUrlParser:"true",
  useUnifiedTopology:"true"
}

mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`,connectionparams)
  .then(()=>{
    console.log("Connected to DB");
  })
  .catch((e)=>{
    console.log("Error:", e);
  });

const { Product } = require('./models/Product')
const { User } = require('./models/User')

app.get('/product', async (req, res) => {
  // load all products from database
  try {
    const products = await Product.find({})
    res.json({
      products: products,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve products from the database',
    })
  }
})

app.get('/product/:productId', async (req, res) => {
  console.log(req.params.productId)
  const productId = req.params.productId
  console.log(productId)
  try {
    const product = await Product.find({name: productId});
    console.log(product)
    res.json({
      product: product,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve product from the database',
    })
  }
})

app.get('/product/:name', async (req, res) => {
  console.log(req.params.name)
  const name = req.params.name
  console.log(name)
  try {
    const product = await Product.find({name: name});
    console.log(product)
    res.json({
      product: product,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve product from the database',
    })
  }
})

app.get('/user', async (req, res) => {
  // load all users from database
  try {
    const users = await User.find({})
    res.json({
      users: users,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve products from the database',
    })
  }
})

app.get('/user/:username', async (req, res) => {
  console.log(req.params.username)
  const username = req.params.username
  console.log(username)
  try {
    const user = await User.find({username: username});
    console.log(user)
    res.json({
      user: user,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve user from the database',
    })
  }
});

app.post('/product/save', async (req, res) => {
  // try to save the message to the database
  try {
    const product = await Product.create({
      likes: req.body.likes,
      product: req.body.product,
    })
    return res.json({
      product: product, // return the message we just saved
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the message to the database',
    })
  }
})


app.post('/product/add', async(req, res) => {
  upload.single('photo');
  try{
    const name = req.body.name
    const author_username=req.body.author_username
    const price=req.body.price
    const tags=req.body.tags
    const description = req.body.description
    const photo = req.body.image
    const likes= req.body.lkes
    const newProductData = {
      name,
      description,
      author_username,
      price,
      tags,
      photo,
      likes
  }
  const newProduct = new Product(newProductData)
  newProduct.save();
  return res.json({
    newproduct: newProduct,
    status: "Product Added",
  })
  }catch(err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the product to the database',
    })
  }
});

module.exports = app