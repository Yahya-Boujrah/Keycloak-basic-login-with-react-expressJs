const express = require('express');
const router = express.Router();

let data = {
  "boujrah.yahya@gmail.com": [
    "yahya",
    "boujrah",
    "Associate Consultant"
  ],
};

const getDocuments = async (req, res) => {
    try {
      const email = req.user;
      console.log('email user ' + email);

      res.status(200).send(data);
      
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  router.get("/", getDocuments);

  module.exports = router;
