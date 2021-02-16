const express = require('express'); 
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const {notFound, errorHandler } = require('./middlewares');

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

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {  
  console.log(`Listening at http://localhost:${port}`);
});
