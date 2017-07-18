// const express = require('express')
// const hbs = require('express-handlebars')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
//
// mongoose.connect('mongodb://marvalous:hunter2@pokedex-shard-00-00-fuqua.mongodb.net:27017,pokedex-shard-00-01-fuqua.mongodb.net:27017,pokedex-shard-00-02-fuqua.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')
//
// const app = express()
// const appRouter = require('./routes/index.js')
// const articleRouter = require('./routes/article.js')
//
// const Article = require('./models/article.js')
//
// app.engine('handlebars', hbs({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')
//
// app.use(bodyParser.urlencoded({ extended: true }))
//
// app.use( express.static('public') )
//
// app.use('/', appRouter)
// app.use('/article', articleRouter)
//
// app.listen(2017)


const express = require('express')
const hbs  = require('express-handlebars')
const Handlebars = require('handlebars')
const request = require('request')


const app = express()



app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// function getSource (){
//   let data
//   let value = request.get(`https://newsapi.org/v1/sources?business`, function ( error, response, body ) {
//     data = JSON.parse(body)
//     var x = Math.floor(Math.random() * data.sources.length)
//     return data.sources[x].id
//   })
//   console.log(data)
//   return value
//
// }
//
// request.get('https://newsapi.org/v1/sources?business')
//   .then( function (results) {
//     data = JSON.parse(body)
//     var x = Math.floor(Math.random() * data.sources.length)
//     return data.sources[x].id
//
//   }
//
//   .then(response=> JSON.parse(body))
//   .then()
// app.get('/', function(req, res){
//   request.get(`https://newsapi.org/v1/sources?business`, ( error, response, body ) => {
//   let data = JSON.parse(body)
//   var x = Math.floor(Math.random() * data.sources.length)
//   res.render('./layouts/main', {
//     source: data.sources[x]
//   })
// })
// })

app.get('/', function(req, res){
  request.get(`https://newsapi.org/v1/sources?category=technology`, (error, response, body) => {
    let categories = JSON.parse(body)
    // console.log(categories.sources)
  res.render('./layouts/main', {
    category: categories.sources
  })
})
})

app.get('/article/new', function( req, res ) {
  // let source = getSource()
  // console.log(source)
  request.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=46a6e7ffefd54b99af8370b318aa627b`, ( error, response, body ) => {
    let data = JSON.parse(body)
    // console.log(data.articles[2])
    var x = Math.floor(Math.random() * data.articles.length)
    res.render('./article/new', {
      article: data.articles[x]
    })

  })

})


// random(article)

app.listen( 2017, function() {
  console.log( 'working' )
})
