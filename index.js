const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get("/shout", (req, res) => {
  let name = req.query.name;
  let UpperCaseName = name.toUpperCase();
  res.send(UpperCaseName);

});

app.get("/fullName", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName); 
});

app.get("/date", (req, res)  => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + "," + year;
  res.send(formattedDate);
});

app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greetingMessage = "Namaste " + name + "!";
  res.send(greetingMessage);
});

app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ',' + city + ',' + state;
  res.send(address);
});

app.get("/total-distance", (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);

  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

app.get("/interest-earned", (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let intersetEarned = (principal * rate * time) / 100;
  res.send(intersetEarned.toString());
});

app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'postive';
  } else {
    result = 'negative';
  }

  res.send("Number is " + result);
});

app.get("/check-even-odd", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 === 0 ) {
    result = 'even';
  } else {
    result = 'odd';
  }

  res.send('Number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if(isLoggedIn) {
    result = 'User is logged in';
  } else {
    result = 'User is not logged in';
  }

  res.send(result);
});

app.get("/check-discount", (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if(age > 65) {
    result = 'User is eligible for discount';
  } else {
    result = 'User is not eligible for discount';
  }

  res.send(result);
});

app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'positive';
  } else if(number < 0) {
    result = 'negative';
  }else {
    result = 'zero';
  }

  res.send('Number is ' + result);
});

app.get('/check-temperature', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = 'cold';
  }else if(temperature < 25){
    result = 'warm';
  }else {
    result = 'hot'
  }

  res.send('Temperature is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
  