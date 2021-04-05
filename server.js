const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`SERVER READY AT https://localhost:${PORT}`)
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(sampleMiddleware)


let requests = 0

function sampleMiddleware(req, res , next){
    requests++
    next()
}

app.set('view engine', 'ejs')
app.get(['/'], sampleMiddleware, HomeGetController)
app.get(['/set'], SetGetController)

function HomeGetController(req, res){
    res.render('index', {
        requests
    })
}
function SetGetController(req, res){
    res.render('index', {
        requests
    })
}