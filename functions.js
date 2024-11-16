const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to oour service!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function checkPassword(password) {
  console.log(password.length)
  if  (password.length > 15) {
    return 'Password is strong.'
  } else {
    return 'Password is weak.'
  }
}
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
})

function calculateSum(num1, num2) {
  let sum = num1 + num2
  return sum.toString()
}
app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2))
})

function checkSubscription(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' is subscribed'
  } else {
    return username + ' is not subscribed'
  }
}
app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.IsSubscribed;
  res.send(checkSubscription(username, subscribed))
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - ((price * discount) / 100)
  return finalPrice.toString()
}
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price, discount))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
  