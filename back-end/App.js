const express = require("express") 
const app = express() 
const path = require("path")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config({ silent: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Any reference to /static/html.html would = /public/html.html
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

// route to get products that a specific user has listed
app.get("/parameter-example/:title", async (req, res) => {
    // use axios to make a request to an API to fetch a single animal's data
    // we use a Mock API here, but imagine we passed the animalId to a real API and received back data about that animal
    try {
      const apiResponse = await axios.get(
        `${process.env.API_BASE_URL_PRODUCT}?key=${process.env.API_SECRET_KEY_PRODUCT}&username=${req.params.username}`
      )
  
      // express places parameters into the req.params object
      const responseData = {
        status: "wonderful",
        message: `Imagine we got the data from the API for animal #${req.params.username}`,
        product: apiResponse.data,
        title: req.params.title,
        username: req.params.username,

        price: req.params.price,
        description: req.params.description,
        service_or_product: req.params.service_or_product,
        num_of_likes: req.params.num_of_likes,
        tags: req.params.tags


        //animal: apiResponse.data,
      }
  
      // send the data in the response
      res.json(responseData)
    } catch (err) {
      // send an error JSON object back to the browser
      res.json(err)
    }
  })

// *********IGNORE THIS STUFF BELOW ITS SOME EXPERIMENTATION*********
// app.get("/getRandomPictures", (req, res, next) => {
// // use axios to make a request to an API for animal data
// axios
//     .get("https://picsum.photos/200")
//     .then(apiResponse => res.json(apiResponse.data)) // pass data along directly to client
//     .catch(err => next(err)) // pass any errors to express
// })

// app.get("/getRandomPictures", (req, res) => {
//     res.sendFile("https://picsum.photos/200");
//   })


//   app.get("/getRandomPictures", function(req, res) {
//     var requestSettings = {
//         url: "https://picsum.photos/200",
//         method: 'GET',
//         encoding: null
//     };

//     request(requestSettings, function(error, response, body) {
//         res.set('Content-Type', 'image/png');
//         res.send(body);
//     });
// });


module.exports = app