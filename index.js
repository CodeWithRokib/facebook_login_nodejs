import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { createRequire } from 'module';
import passport from '../config/config.js';
import userRoutes from './routes/userRoute.js';

const app = express();
const require = createRequire(import.meta.url);
// Initialize Passport and session middleware
app.use(session({
    secret: '67b091bdf5ce193c5a87d39daec7b321',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Use authentication routes
  app.use('/auth',userRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

