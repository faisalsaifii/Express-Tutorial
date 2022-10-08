const express = require('express')
// require executes the js file and returns the exported object

const app = express()
// This creates the server

// Using static Files
app.use(express.static('public'))
// Now the directories inside the public folder can be accessed through the local host path
// For example we have /test/index.html
// And also /test/yay/hellnah.html
// http://localhost:420/test/yay/hellnah.html
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')
app.use(logger) // Using for the whole app
// Always use your middleware at the top of the page
app.use(express.json())
app.get('/',logger,(req,res) => { // Applying middleware to individual router
    // res.send("Wordddddd") // Sends String
    // console.log("Hello") // Passes to console
    // res.json({message: "My Message"}) // ends JSON
    // res.sendStatus(404) // Sends the default shown error on the screen
    // res.status(404).send("This is not really a real error I just made it hehe") // Sends a custom text for any error that occurs
    // res.download("server.js") //  Make the user Download a file
    res.render('index', {text123: 'World'}) // Render a file
    // It would give an error if the name of the value was changed from text to something else so in ejs we use locals to always find the value even if its not declared just not use anything or give any error
    // You need to setup a view engine before rendering out HTML
    // Example, EJS
    // Using these all together is possible
    // HTTP Codes
    // https://www.restapitutorial.com/httpstatuscodes.html

})

// Specifying more routes
app.get('/route1',(req,res) => {
    res.send("Route 1")
}) // http://localhost:420/route1

app.get('/route2',(req,res) => {
    res.send("Route 2")
}) // http://localhost:420/route2
const userRouter = require('./routes/users')
app.use('/users', userRouter) // Can be used for many things but here used to use the routes

// Making our own middleware
function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

app.listen(420)
// You can specify any port number
