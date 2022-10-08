const express = require('express')
const router = express.Router()

// Goes from top to bottom
// These functions also take next but we never almost use em
router.get('/',(req,res)=>{
    res.send("This is the Users HomePage")
})
router.get('/new',(req,res)=>{
    res.render('users/new')
})

// Posting a route
router.post('/',(req,res)=>{
    console.log(req.query.name)
    const isValid = true;
    if (isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/${users.length - 1}`)
    } else {
        console.log("Error")
    }
    console.log(req.body.firstName)
})

// If this get was after the dynamic id then it wouldn't get executed
router.get('/user1',(req,res)=>{
    res.send("This is the Page of User 1")
})

router.get('/:id',(req,res) => { // Dynamic parameter in the path
    res.send(`Get the user with id ${req.params.id}`) // Used to access the parameter
})
// Use ` for using ${}

router.put('/:id',(req,res) => { // Dynamic parameter in the path
    res.send(`Update the user with id ${req.params.id}`) // Used to access the parameter
})

router.delete('/:id',(req,res) => { // Dynamic parameter in the path
    res.send(`Delete the user with id ${req.params.id}`) // Used to access the parameter
})

// Simpler way to do this
router.route('/:id').get((req,res) => { // Dynamic parameter in the path
    console.log(req.user)
    res.send(`Get the user with id ${req.params.id}`)
     // Used to access the parameter
}).put((req,res) => { // Dynamic parameter in the path
    res.send(`Update the user with id ${req.params.id}`) // Used to access the parameter
}).delete((req,res) => { // Dynamic parameter in the path
    res.send(`Delete the user with id ${req.params.id}`) // Used to access the parameter
}) // Multiple requests for one code

const users = [{name: "Faisal"}, {name: "Arish"}]
// MiddleWare
// Acts between the route and get
router.param('id', (req,res,next, id) => {
    req.user = users[id] // Stores user information request
    next() // Specifies that the work here is done and it can move on to do whatever it wants
})
module.exports = router