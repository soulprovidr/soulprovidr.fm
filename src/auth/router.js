const express = require('express');
const router = express.Router();

const User = require('../users/models/User');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. Find user with specified email.
    const user = await User.query().findOne({ email });
    // 2. Authenticate password.
    if (user && user.authenticate(password)) {
      // 3. If successful, store user in cookie and return.
      req.session.user = user.toJSON();
      return res.status(200).json(user);
    } else {
      // 4. Otherwise, return unauthorized.
      return res.status(401).end();
    }
  } catch (e) {
    return res.status(500).end();
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = await User.query().insertAndFetch(req.body);
    req.session.user = user.toJSON();
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).end();
  }
});

router.get('/logout', (req, res) => {
  req.session = null;
  return res.status(200).end();
});

module.exports = router;
