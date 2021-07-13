const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/',(req,res)=>{
   res.render('welcome');
});


module.exports = router;