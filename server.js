const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))

app.use(routes)

app.listen(3000, () => {
    console.log('Server running on PORT 3000')
})