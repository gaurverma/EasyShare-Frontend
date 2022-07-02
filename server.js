const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.use(express.static('public'));

app.get('/', (req, res) => {
        res.render('index')
})

app.listen(port, function() {
    console.log('server is running');
})