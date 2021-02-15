const express = require('express'); 
const morgan = require('morgan');
const helmet = require('helmet');

const app = express(); 
app.use(morgan('common')); //to have logs 
app.use(helmet()); // for security

const port = process.env.PORT || 1337; 

app.listen(port, () => {  
  console.log(`Listening at http://localhost:${port}`);
});
