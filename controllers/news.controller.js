const { json } = require("express")
const News = require("../models/News.model")

module.exports.newsController = {

    addNews: (req, res) => {
       News.create({
          title: req.body.title,
          text: req.body.text,
          category: req.body.category,
       }).then((data) => {
        res.json(data)
       })
    },


    removeNews: (req, res) => {
        News.findOneAndDelete().then(() => {
            res.json('deleted')
        })


    },
    getNews: (req, res) => {
        News.find().then((data) => {
            res.json(data)
        })


    },
    getNewsById: (req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },

    updateNewsById: (req, res) => {
        News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text
        }).then((data) => {
            res.json(data)
        })
    },

    getNewsByCategory: (req, res) => {
        News.find({category: req.params.id } , (err, data) => {
            res.json(data);
        })
    },
    addCommetByNews: (req, res) => {
        News.create( req.params.id, {
           commetn: req.body.comment
        }).then((data) => {
            res.json(data)
        })
    }
}