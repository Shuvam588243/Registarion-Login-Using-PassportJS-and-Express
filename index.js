const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const express_layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

app.use(express_layouts);
app.set('view engine','ejs');

app.use(express.urlencoded({extended : true }));

const db = require('./config/keys').MongoURI;
mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=> console.log('Database Connected'))
.catch(err => console.log(err));

app.use('/',require('./Routes/main'));
app.use('/Users',require('./Routes/user'));

app.listen(port, ()=>
{
    console.log(`Listening to port ${port}`);
})