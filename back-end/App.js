const express = require("express") 
const app = express() 
const path = require("path")
const axios = require("axios")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static("public"))

app.get("/getUserData", (req, res, next) => {
axios
    .get("https://my.api.mockaroo.com/user_data.json?key=8103fdd0")
    .then(apiResponse => res.json(apiResponse.data)) 
    .catch(err => next(err))
})

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