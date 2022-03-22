const express = require('express');
const app = express();
const sample = require('./sample')
const products = require('./products')


app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("pages/index", {
      sample
  });
});

app.get('/login', function(req, res){
  res.render("pages/login")
})
app.get('/register', function(req, res){
  res.render("pages/register")
})

app.get('/products', function(req, res){
  res.render("pages/products", {
    products
  })
})

app.get('/maintenance', function(req, res){
  res.render("pages/maintenance")
})

app.get('/products/:category', (req, res) => {
  const category = req.params.category

  const categoryExist = products.filter((product) => product.category == category)
  res.render('pages/products', {
    products: categoryExist
  })
   
})

app.get('/products/:category/:slug', (req, res) => {
  const category = req.params.category
  const slug = req.params.slug

  const categoryExist = products.filter((product) => product.category == category)
  const slugExist = products.filter((product) => product.slug == slug)
  res.render('pages/pdcategory', {
    products: slugExist
  })
   
})

app.use(express.static(__dirname + "/public"));

app.listen(8080)
console.log('Server ON')