const express = require('express')
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

const app = express()

const port = 4000;

app.get('/api', (req, res) =>{
    res.render('Chào mừng tới API server!');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRoute);

app.listen(port, ()=> console.log(`Server đang lắng nghe tại cổng ${port}`));