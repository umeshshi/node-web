const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;


var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerHelper('currYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamit', (text) => {
  return text.toUpperCase();
});
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Umesh',
  //   likes: [
  //     'Test',
  //     'Tech'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'Welcome to HBS with Partials',
    welCome: 'This is a test'
  })

});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad page'
  });
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
