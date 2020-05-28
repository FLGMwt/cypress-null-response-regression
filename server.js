const express = require('express')
const app = express()
const port = 3001

app.get('/give-me-null', (req, res) => res.json(null))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))