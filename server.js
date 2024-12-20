//Step import ...
const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit:'20mb' }))
readdirSync('./routes')
.map((item) => app.use('/api', require('./routes/' + item)))



//Step Router
app.post('/api', (req, res) => {
    // code
    const { username, password } = req.body
    res.send("Jekkru")
    console.log(username)
    console.log(password)
})


app.listen(5000, () => {
    console.log("Server is running on port 5000")
})