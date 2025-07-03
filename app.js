const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.json());


app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.use('/api/recipes', routes);

const mongoURL = process.env.MONGO_URI;
mongoose.connect(mongoURL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
