const requests = require('./middleware/requests');
const axios = require('./middleware/axios');
// requiring database
const db = require("./models");
// fetching requests
const trending = require('./middleware/trending');
const originals = require('./middleware/originals');
const topRated = require('./middleware/topRated');
const family = require('./middleware/family');
const animated = require('./middleware/animated');
const romance = require('./middleware/romance');
const comedy = require('./middleware/comedy');
const action = require('./middleware/action');
const banner = require('./middleware/banner');


require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require("connect-flash")
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn')

const app = express();

app.set("view engine", "ejs");

app.use(require("morgan")("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(layouts);

app.use(
  session({
    // a string used to generate a unique
    // session ID cookie to share with the browser
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// the following two lines must appear after configuring the session
app.use(passport.initialize());
app.use(passport.session());

// FLASH
app.use(flash());
// adds a method to the req object for universal access

// Set up local variables (data that's accessible from anywhere in the app)
app.use((req, res, next) => {
  // before every route is loaded, attach flash messages and the
  // current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;

  next();
});
// grabbing movie data


app.get('/', async (req, res) => {
  const grabBanner = await banner.fetchBanner()
  const grabTrending = await trending.fetchTrend()
  const grabOriginals = await originals.fetchOriginals()
  const grabTopRated = await topRated.fetchTopRated()
  const grabFamily = await family.fetchFamily()
  const grabAnimated = await animated.fetchAnimated()
  const grabRomance = await romance.fetchRomance()
  const grabComedy = await comedy.fetchComedy()
  const grabAction = await action.fetchAction()
  res.render('index', {
    myBanner: grabBanner,
    myTrending: grabTrending,
    myOriginals: grabOriginals,
    myTopRated: grabTopRated,
    myFamily: grabFamily,
    myAnimated: grabAnimated,
    myRomance: grabRomance,
    myComedy: grabComedy,
    myAction: grabAction
  });
});
let myMovieRes = []
app.get("/search/:search", (req, res)=>{
  let keyword  = req.query.title
  axios.get(`${requests.searchMovie}${keyword}`)
   .then((responseData)=>{
     const searchData = responseData.data.results
     searchData.forEach((movie)=>{ 
       if(movie.poster_path!= null){
          myMovieRes.push(movie)
     } 
  }) 
  res.render("search", {responseData: myMovieRes})
  myMovieRes = []
  })
})


app.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile");
});

// POST create a join action
app.post("/save", (req, res) => {
  db.watchList.create({
    userId: req.body.userId,
    movieId: req.body.viedoId,
    movieName: req.body.videoName,
    movieDescription: req.body.overviewInput,
    movieRating: req.body.ratingInput,
    movieImg: req.body.imgInput,
  }).then(function(join) {
    res.redirect('/watch_later')
  })
});
// GET favorite movies
app.get('/watch_later', function(req, res) {
  // Our database calls are added WITHIN the route as seen here
  db.watchList.findAll().then((getList) => {
    // We respond to the original request within the DB callback function and send some data to a template
    res.render('watchLater', { watchLater: getList })
  })
});

app.use("/auth", require("./routes/auth"));

var server = app.listen(process.env.PORT || 3000, () =>
  console.log(
    `🎧You're listening to the smooth sounds of port ${
      process.env.PORT || 3000
    }🎧`
  )
);

module.exports = server;
