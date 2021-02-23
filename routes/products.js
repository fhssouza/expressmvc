var express = require('express');
const model = require('../model/products')

var router = express.Router();

const products = [{
  name: 'geladeira',
  price: 800,
  type: 'eletronic'
}, {
  name: 'arroz',
  price: 30,
  type: 'food'
}];

const types = [{
  id: "eletronic",
  label: "Eletronico"
}, {
  id: "food",
  label: "Alimenticio"
}, {
  id: "drugs",
  label: "Farmaceutico"
}]

// http://localhost:3000/products

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products', { name: "Página de Produtos", types: types});
});

//req = requisição
//req = resposta

router.post('/', function(req, res){
  console.log(req.body)
  res.render('products', { name: "Página de Produtos", types: types});
});

// http://localhost:3000/products/lista

router.get('/lista', function(req, res){
  res.render('productsList', {products: products});
});


module.exports = router;
