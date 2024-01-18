const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/survey', (req, res) => {
  res.sendFile(__dirname + '/views/survey.html');
});

// Store survey responses (for simplicity, using an in-memory array)
let surveyResponses = [];

app.post('/submit-survey', (req, res) => {
  const newResponse = req.body;
  surveyResponses.push(newResponse);
  console.log('Survey Response:', newResponse);
  res.redirect('/confirmation');
});

app.get('/confirmation', (req, res) => {
  res.sendFile(__dirname + '/views/confirmation.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.listen(3000, '10.46.204.96', () => {
  console.log(`Server is running at http://10.46.204.96:3000`);
});
