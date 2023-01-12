//basic server structure
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

//setup the template engine
app.set('view engine', 'ejs')

app.use(express.static('public'));
//app.use(express.urlencoded({exteded:true}));//it enable sending from clientside to backend
app.use(bodyparser.urlencoded({extended:true}));

let plNames = ['c', 'c++', 'java', 'python'];

//sending a response to frontend or clientside
app.get('/',(req, res) =>{ 
    // res.send('<h1>we are web developers</h1>');
    res.status(200).render('index', {pageTitle: 'Home Page', proNames: plNames});
});
app.get('/contact',(req, res) =>{ 
    // res.send('<h1>we are web developers</h1>');
    res.status(200).render('contact', {pageTitle: 'contact Page'});
});

app.post('/',(req, res)=>{
    const plName = req.body.plName;
    plNames.push(plName);
   // console.log(plNames)
    //res.status(201).send('data is create');
    res.redirect('/');

});
//getting data from frontend and insert it onto plNames array of string




app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

// /basic server structure
// const express = require('express');


// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to frontend or clientside
// app.get('/',(req, res) =>{ //  '/'means or clientside
//     res.send('<h1>we are web developers</h1>');
// });
// app.get('/services',(req, res) =>{ //means or clientside
//     res.send('<h1>code is life</h1>');
// });
// app.get('/feature',(req, res) =>{ 
//     res.send('<h1>Welcome to stackdeveloper.com</h1>');
// });
// app.get('/contact',(req, res) =>{ 
//     res.send('<h1>nothing is impossible</h1>');
// });





// app.listen(PORT, ()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });