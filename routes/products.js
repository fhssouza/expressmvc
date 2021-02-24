var express = require('express');
const model = require('../model/products')

var router = express.Router();

let products = [{
  id: 1,
  name: 'geladeira',
  price: 800,
  type: 'eletronic'
}, {
  id: 2,
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
  const newProduct = req.body;
  newProduct.id = parseInt(Math.random() * 10000);
  products.push(newProduct);
  res.render('products', { name: "Página de Produtos", types: types});
});

// http://localhost:3000/products/lista

router.get('/lista', function(req, res){
  res.render('productsList', {products: products});
});

router.delete('/:id', function(req, res){
  console.log('chamando o metodo delete');
  console.log(req.params.id)

  products = products.filter(function(products){
    return products.id !== parseInt(req.params.id);
  })

  res.render('productsList', {products: products});
});


module.exports = router;
