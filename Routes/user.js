const router = require('express').Router();

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/register',(req,res)=>{
    res.render('register')
});

router.post('/register',(req,res)=>{
    const {name,email,pass1,pass2} = req.body;
    let errors = [];

    if(!name || !email || !pass1 || !pass2)
    {
        errors.push({ msg : 'Please Fill in all the Fields '});
    }

    if(pass1 != pass2)
    {
        errors.push({ msg : 'Passwords Do not Matched '});
    }

    if(pass1.length < 6)
    {
        errors.push({ msg : 'Passwords should be atleast 6 characters '});
    }
});

module.exports = router;



module.exports = router;