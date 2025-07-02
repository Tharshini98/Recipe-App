const express = require ("express");
const mongoose = require ("mongoose");
const routes = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/recipesdb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error.", err));

app.use("/api/recipes", routes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
