const express = require('express');
const app = express()
const { createBook } = require('./controllers/bookController');

app.use(express.json())

const bookRoutes=require('./routes/bookRoutes')


app.use('/books',bookRoutes)

const PORT = 3009;



app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}/books`)
})