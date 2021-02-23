const requests = require('./middleware/requests');
const axios = require('./middleware/axios');
// fetching requests
const trending = require('./middleware/trending');
const originals = require('./middleware/originals');
const family = require('./middleware/family');



require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require("connect-flash")
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn')

const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  // a string used to generate a unique 
  // session ID cookie to share with the browser
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true 
}))

// the following two lines must appear after configuring the session
app.use(passport.initialize())
app.use(passport.session())

// FLASH
app.use(flash())
// adds a method to the req object for universal access

// Set up local variables (data that's accessible from anywhere in the app)
app.use((req, res, next) => {
  // before every route is loaded, attach flash messages and the 
  // current user to res.locals
  res.locals.alerts = req.flash()
  res.locals.currentUser = req.user

  next()
})
// grabbing movie data


app.get('/', async (req, res) => {
  const grabTrending = await trending.fetchTrend()
  const grabOriginals = await originals.fetchOriginals()
  const grabFamily = await family.fetchFamily()
  res.render('index', {
    myTrending: grabTrending,
    myOriginals: grabOriginals,
    myFamily: grabFamily
  });
});

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

app.use('/auth', require('./routes/auth'));

var server = app.listen(process.env.PORT || 3000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
