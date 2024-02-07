import express from 'express';
import viewRouter from './router/router.js';
import path from 'path';


// express app
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const __dirname = path.resolve()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))


// ejs template 
app.set('view engine', 'ejs');

// router
app.use('/', viewRouter);

// Port
const PORT = process.env.PORT || 8000;

// listen port
app.listen(PORT, () => {
    console.log(`server is running...! ${PORT}`);
})