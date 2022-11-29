const express = require("express") 
const session = require("express-session")
const passport = require("passport")
const app = express() 
const path = require("path")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config({ silent: true })
const mongoose = require('mongoose');
const dburl="mongodb+srv://mongo:n5HBuQOqMlpgmMsb@cluster0.nrb6jku.mongodb.net/ArtistsGo?retryWrites=true&w=majority"
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(session({ secret: "cats "}));
app.use(passport.initialize());
app.use(passport.session());
require("./Auth")


//FOR PASSPORT.JS
function isSignedIn(req, res, next) {
  req.user ? next() : res.status(401).json({ message: "Unauthorized" })
}

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Sign in with Google</a>');
});

app.get('/protected', (req, res) => {
  res.send('Welcome to the protected route, ' + req.user.displayName + '!');
});

app.get('/logout', (req, res) => { 
  req.logout();
  res.send('Logged out');
});

app.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/google/callback', 
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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Any reference to /static/html.html would = /public/html.html
app.use("/static", express.static("public"))
app.use(cors())

mongoose
  .connect(dburl,connectionparams)
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


// THIS STUFF BELOW IS FROM SPRINT 2
// app.get("/user", (req, res, next) => {
// axios
//     .get("https://my.api.mockaroo.com/user_data.json?key=94293da0")
//     .then(apiResponse => res.json(apiResponse.data)) 
//     .catch(err => next(err))
// })

// app.get("/product", (req, res, next) => {
// axios
//     .get("https://my.api.mockaroo.com/item_data.json?key=94293da0")
//     .then(apiResponse => res.json(apiResponse.data)) 
//     .catch(err => next(err))
// })

// // route to get a specific product
// app.get("/product/:title", async (req, res) => {
//     try {
//       const apiResponse = await axios.get(
//         `${process.env.API_BASE_URL_PRODUCT}?key=${process.env.API_SECRET_KEY_PRODUCT}&title=${req.params.title}`
//       )
      
//       const product = apiResponse.data.find(p => p.title === title);

//       const responseData = {
//         title: product.title,
//         username: product.username,
//         description: product.description,
//         service_or_product: product.service_or_product,
//         num_of_likes: product.num_of_likes,
//         tags: product.tags,
//         price: product.price,
//       }
//       res.json(responseData)
//     } catch (err) {
//       res.json(err)
//     }
//   })


module.exports = app