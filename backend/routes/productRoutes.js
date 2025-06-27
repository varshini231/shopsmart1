const express = require('express');
const router = express.Router();

// Static list of sample products
const products = [
  {
    name: "Milk",
    price: 50,
    image: "/images/milk.png",
  },
  {
    name: "Tomato",
    price: 30,
    image: "/images/tomato.png",
  },
  {
    name: "Apple",
    price: 60,
    image: "/images/apple.png",
  },
  {
    name: "Rice",
    price: 40,
    image: "/images/rice.png",
  },
  {
    name: "Bread",
    price: 25,
    image: "/images/bread.png",
  }
];

// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
