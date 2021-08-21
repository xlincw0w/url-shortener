const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())

app.use('/urls', require('./api/routes/urls'))
app.use('/resolve', require('./api/routes/resolve'))

// app.use(express.static(path.join(__dirname, 'dist')))
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

app.listen(PORT, function () {
    console.log('Server listenning on port ' + PORT)
})
