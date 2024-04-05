const express = require('express');
const documents = require('./Routes/documents.js');

const app = express();

const PORT  = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('.....')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  
})

app.use('/documents', documents);