const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 4000;

app.use(express.json());
app.use(require("./routes/news.route"));
app.use(require('./routes/categories.route'));
// app.use(require('./routes/comments.route'));

mongoose.connect("mongodb+srv://Akrom:akrom@cluster1.p5qqttz.mongodb.net/new-project?retryWrites=true&w=majority", () => {
    console.log('подключение')
    app.listen(port, () => {
        console.log('Сервер запушен')
      })
})
