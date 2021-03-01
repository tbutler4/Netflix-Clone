const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', (req, res) => {
  res.render('auth/signup');
});

router.post('/', (req, res) => {
  // find or create the user
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      // success
      passport.authenticate('local', {
        successRedirect: '/dashboard',
        // successFlash: 'Account created and user logged in!'
      })(req, res)
    } else {
      // user already exists, so we redirect
      req.flash('error', 'Email already exists')
      res.redirect('/')
    }
  }).catch(error => {
    // if an error occurs, console log the error message
    req.flash('error', error.message)
    res.redirect('/')
  })
})

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/auth/login',
  // successFlash: 'You have logged in!',
  failureFlash: 'Invalid username and/or password.'
}))

// update route
router.put('/update', (req, res) => {
  // find or create the user
  console.log('req', req.body)
  db.user.update({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  },{
  where: {
    id: parseInt(req.body.id)
  }
  }).then((user) => {
    console.log('user: ', user )
    if (user) {
      // success
      req.flash('success', 'Account succesfully updated!')
      res.redirect('/profile')
    } else {
      // user already exists, so we redirect
      req.flash('error', 'Something went wrong')
      res.redirect('/profile')
    }
  }).catch(error => {
    // if an error occurs, console log the error message
    req.flash('error', error.message)
    res.redirect('/profile')
  })
})

router.get('/logout', (req, res) => {
  // .logout() is added to the req object by passport
  req.logout()
  // req.flash('success', 'You have logged out!')
  res.redirect('/')
})

router.delete('/:id', function(req, res) {
  db.user.destroy({
    where: { id: parseInt(req.body.id)}
  }).then(function(removed) {
    res.redirect('/')
  });
});

module.exports = router;
