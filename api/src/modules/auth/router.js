const express = require('express');
const router = express.Router();

const User = require('../users/models/User');

router.post('/login', (req, res) => {
  
});

router.post('/register', async (req, res) => {
  try {
    const user = await User.query().insertAndFetch(req.body);
    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json();
  }
});

router.get('/logout', (req, res) => {

});

module.exports = router;
