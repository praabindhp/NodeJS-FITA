const express = require('express')
const recordRoutes = require('./routes/recordRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', recordRoutes)

app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`)
})