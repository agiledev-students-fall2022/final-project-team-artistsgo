const express = require("express") 
const session = require("express-session")
const passport = require("passport")
require('dotenv').config( { path: '../../.env' } );
require("dotenv").config({ silent: true })
const path = require("path")
const multer= require("multer")
const cors = require("cors")
// const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const app = express() 
const urlencodedparser = bodyParser.urlencoded({ extended: false })

app.use(express.json()) // decode JSON-formatted incoming POST data
// app.use(
//   session({
//     secret: process.env.APP_SECRET || 'this is the default passphrase',
//     resave: false,
//     saveUninitialized: false
//   })
// )
app.use("/static", express.static("public"))
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json(), urlencodedparser)

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
const { User } = require('./models/User');

app.post('/register', async (req, res) => {
  const user = req.body;
  console.log(user)
  const takenUsername = await User.findOne({username: user.username})
  const takenEmail = await User.findOne({email: user.email})

  if(takenUsername || takenEmail){
    res.json({message: "Username or email has already been taken."})
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbuser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password
    })

    dbuser.save();
    res.json({message: "success"})
  }
})

app.post('/login', (req, res) => {
  const userLoggedIn = req.body
  console.log(userLoggedIn)
  User.findOne({username: userLoggedIn.username})
  .then(dbUser => {
    if(!dbUser){
      return res.json({message: "Invalid Username or Password"})
    }
    bcrypt.compare(userLoggedIn.password, dbUser.password)
    .then(isCorrect => {
      if(isCorrect){
        const payload = {
          id: dbUser._id,
          username: dbUser.username
        }
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {expiresIn: 86400},
          (err, token) => {
            if(err) return res.json({message: err})
            return res.json({
              message: "Success",
              token: "Bearer " + token
            })
          }
        )
      } else {
        return res.json({message: "Invalid Username or Password"})
      }
    })
  })
})

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token']?.split(' ')[1]

  if(token){
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if(err) return res.json({isLoggedIn: false, message: "failed to authenticate"})
      req.user = {};
      req.user.id = decoded.id
      req.user.username = decoded.username
      next()
    })
  } else {
    res.json({message: "incorrect token", isLoggedIn: false})
  }
}

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.json({isLoggedIn: true, username: req.user.username})
})




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

app.get('/product/collection/:collectionName', async (req, res) => {
  console.log(req.params.collectionName)
  const collectionName = req.params.collectionName
  console.log(collectionName)
  try {
    const products = await Product.find({tags: collectionName});
    console.log(products)
    res.json({
      products: products,
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

app.use('/images', express.static(path.join(__dirname, 'images')));
//store upload images
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './images')
  },
  filename: function(req, file, cb) {   
    cb(null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

const upload = multer({ storage:storage, fileFilter:fileFilter});

app.post('/product/add', upload.single('photo'), async (req,res) =>{
  try{
    req.body.photo = req.file.path
    const newProduct1 = new Product({
      name: req.body.name,
      description:req.body.description,
      author_username:req.body.author_username,
      price:req.body.price,
      tags: JSON.parse(req.body.tags),
      image:  req.body.photo,
      likes: req.body.lkes
    })
    const createProduct=await newProduct1.save();
  } catch(e){res.status(400).send(e);
}});


module.exports = app