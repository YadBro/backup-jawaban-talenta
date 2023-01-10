const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routes/index.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000, () => console.log('App running on port 5000'));
