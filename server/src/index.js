const express = require('express'); 
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express(); 
app.use(morgan('common')); //to have logs 
app.use(helmet()); // for security
app.use(cors({
  origin: "http://localhost:3000",
})); 

const port = process.env.PORT || 1337; 

app.get('/', (req, res) => {
  res.json({
    message:'Hello World!',
  });
})

app.use((req, res, next) => { //last middleware
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(err);
});

app.use((error, req, res, next) => { // error handler should have 4 arguments with error as fist one
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? ' A bug in URL ' : error.stack
  })
})

app.listen(port, () => {  
  console.log(`Listening at http://localhost:${port}`);
});
