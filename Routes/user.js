const router = require('express').Router();

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/register',(req,res)=>{
    res.render('register')
});

router.post('/register',(req,res)=>{
    const {name,email,password,password2} = req.body;
    let errors = [];

    if(!name || !email || !password || !password2)
    {
        errors.push({ msg : 'Please Fill in all the Fields '});
    }

    if(password != password2)
    {
        errors.push({ msg : 'Passwords Do not Matched '});
    }

    if(password.length < 6)
    {
        errors.push({ msg : 'Passwords should be atleast 6 characters '});
    }
    if(errors.length > 0)
    {
        res.render('register',{
            errors, 
            name,
            email,
            password,
            password2
        })
    }
    else{
        res.send('passed');
    }
});

module.exports = router;



module.exports = router;