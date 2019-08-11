const express = require('express');
const router = express.Router();

const User = require('../users/models/User');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.query().findOne({ email });
    if (user && user.authenticate(password)) {
      req.session.user = user;
      return res.status(200).end();
    } else {
      return res.status(401).end();
    }
  } catch (e) {
    return res.status(500).end();
  }
});

router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.query().insertAndFetch(req.body);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).end();
  }
});

router.get('/logout', (req, res) => {
  console.log(req.session.user);
  return res.status(200).end();
});

module.exports = router;
