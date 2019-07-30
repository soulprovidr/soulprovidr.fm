const express = require('express');
const router = express.Router();

const User = require('../users/models/User');

router.post('/login', (req, res) => {
  
});

router.post('/register', async (req, res) => {
  try {
    const user = new User()
    await AuthService.register(req);
    return res.status(200).send(req.user);
  } catch (e) {
    return res.status(401).send();
  }
});

router.get('/logout', (req, res) => {

});

module.exports = router;
