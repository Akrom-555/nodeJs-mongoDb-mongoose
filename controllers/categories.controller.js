const { json } = require("express")
const Category = require("../models/Category.model")

module.exports.categoryController = {
    addCategories: (req, res) => {
        Category.create({
            title: req.body.title
        }).then((data) => {
            res.json(data)
        })
    },
    getCategories: (req, res) => {
        Category.find().then((data) => {
            res.json(data)
        })
    },
    removeCategories: (req, res) => {
        Category.findOneAndDelete().then((data) => {
            res.json(data)
        })
    }
}