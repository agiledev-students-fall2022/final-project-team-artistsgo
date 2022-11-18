const express = require("express") 
const app = express() 
const path = require("path")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config({ silent: true })
const mongoose = require('mongoose');
const dburl="mongodb+srv://mongo:n5HBuQOqMlpgmMsb@cluster0.nrb6jku.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json()) // decode JSON-formatted incoming POST data

const connectionparams={
  useNewUrlParser:"true",
  useUnifiedTopology:"true"
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
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

app.get('/products', async (req, res) => {
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