const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipe.routes');
const errorHandler = require('./middlewares/error.middleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Recipe API is running');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
