const express = require("express") 
const app = express() 
const path = require("path")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config({ silent: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static("public"))
app.use(cors())

app.get("/user", (req, res, next) => {
axios
    .get("https://my.api.mockaroo.com/user_data.json?key=94293da0")
    .then(apiResponse => res.json(apiResponse.data)) 
    .catch(err => next(err))
})

app.get("/product", (req, res, next) => {
axios
    .get("https://my.api.mockaroo.com/item_data.json?key=94293da0")
    .then(apiResponse => res.json(apiResponse.data)) 
    .catch(err => next(err))
})

// route to get a specific product
app.get("/product/:title", async (req, res) => {
    try {
      const apiResponse = await axios.get(
        `${process.env.API_BASE_URL_PRODUCT}?key=${process.env.API_SECRET_KEY_PRODUCT}&title=${req.params.title}`
      )
      
      const product = apiResponse.data.find(p => p.title === title);

      const responseData = {
        title: product.title,
        username: product.username,
        description: product.description,
        service_or_product: product.service_or_product,
        num_of_likes: product.num_of_likes,
        tags: product.tags,
        price: product.price,
      }
      res.json(responseData)
    } catch (err) {
      res.json(err)
    }
  })


module.exports = app