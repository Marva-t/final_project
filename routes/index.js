const express = require('express')

// const Article = require('../models/Article.js')

const appRouter = express.Router()

appRouter.get('/', ( req, res ) => {
    Article.find({}, ( err, articles  ) => {
        res.render('index', { articles })
    })
})

module.exports = appRouter
