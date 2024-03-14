import express from 'express';
import passport from '../config/config.js';

const router = express.Router();

// Initialize Facebook authentication
router.get('/facebook', passport.authenticate('facebook'));

// Handle Facebook callback
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to the desired page
    res.redirect('/dashboard');
  }
);

router.get('/login', (req, res) => {
    res.render('login');
  });

export default router;