const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()

//connect to mongo db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology : true});

// middleware 
app.use(bodyParser.json());

// import routes
const userRoutes = require('.routes/taskRoutes');
app.use('/api', taskRoutes)

// start server

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`Example app listening on port ${port}!`))