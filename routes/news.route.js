const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post('/news', newsController.addNews);
router.patch('/news/:id', newsController.updateNewsById);
router.delete('/news', newsController.removeNews);
router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.getNewsById);
router.get('/news/category/:id', newsController.getNewsByCategory);
router.post('/news/comment/:id', newsController.addCommetByNews);

module.exports = router