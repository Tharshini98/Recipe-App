const Recipe = require('../models/recipe.model');


exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};


exports.getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};


exports.getRecipeById = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      res.status(404);
      throw new Error('Recipe not found');
    }
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};


exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!recipe) {
      res.status(404);
      throw new Error('Recipe not found');
    }
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};


exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      res.status(404);
      throw new Error('Recipe not found');
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    next(error);
  }
};
