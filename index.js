const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.statusCode = 200
  const data = fs.readFileSync('index.html')
    res.send(data.toString())
})
app.get('/about', (req, res) => {
    res.statusCode = 200
    const data = fs.readFileSync('about.html')
      res.send(data.toString())
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/home`)
})