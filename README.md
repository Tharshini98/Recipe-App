 Recipe App (CRUD API)

This is a simple Recipe Management API built with **Node.js**, **Express.js**, and **MongoDB** (using **Mongoose**) following the **MVC pattern**.  
It allows users to Create, Read, Update, and Delete recipes through a RESTful API.


POSTMAN API Request



 GET     `/api/recipes`                Get all recipes       
 POST    `/api/recipes`                Create a new recipe   
 GET     `/api/recipes/:id`            Get a recipe by ID    
 PUT     `/api/recipes/:id`            Update a recipe by ID 
 DELETE  `/api/recipes/:id`            Delete a recipe by ID 

{
  "title": "Tomato Rice",
  "ingredients": ["Tomato", "Rice", "Spices"],
  "instructions": "Cook tomato masala, mix with rice."
}
