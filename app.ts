import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

// Home
app.get('/', (req, res) => {
    res.render('index')
})

// Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
