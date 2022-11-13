const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");

const route = Router()




route.post('/category', categoryController.addCategories);
route.get('/category', categoryController.getCategories);
route.delete('/category', categoryController.removeCategories)





module.exports = route