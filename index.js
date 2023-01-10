const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routes/index.js');

const app = express();
const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOption));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000, () => console.log('App running on port 5000'));
