const express = require('express')
const { HomeGetControllers } = require('./controllers/HomeController')
const { LoginGetControllers, LoginPostControllers } = require('./controllers/LoginController')
const { SignUpGetControllers, SignUpPostControllers } = require('./controllers/SignUpController')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`SERVER READY AT https://localhost:${PORT}`)
})

app.use(express.static('public'))
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(sampleMiddleware)


// let requests = 0

// function sampleMiddleware(req, res , next){
//     requests++
//     next()
// }

app.set('view engine', 'ejs')
app.get('/', HomeGetControllers)
app.get('/login', LoginGetControllers)
app.get('/signup', SignUpGetControllers)

app.post('/login', LoginPostControllers)
app.post('/signup', SignUpPostControllers)

// app.get(['/'], sampleMiddleware, HomeGetController)
// app.get(['/set'], SetGetController)

// function HomeGetController(req, res){
//     res.render('index', {
//         requests
//     })
// }
// function SetGetController(req, res){
//     res.render('index', {
//         requests
//     })
// }